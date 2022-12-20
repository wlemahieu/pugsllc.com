/**
 * sendEmail.ts
 *
 * A cloud function for sending emails, triggered via cloud task.
 */
import * as sgMail from '@sendgrid/mail';

// common template /w button d-7d80d66d56c347cf95fb619524028987
interface AttachmentI {
  content: string;
  type: string;
  filename: string;
  disposition: string;
  content_id: string;
}

interface DynamicTemplateDataI {
  subject: string;
  content: string;
  message: string;
  button_text: string;
  button_url: string;
}

interface DataI {
  templateId: string;
  fromEmail: string;
  fromName: string;
  toEmail: string;
  dynamicTemplateData: DynamicTemplateDataI;
  attachments: Array<AttachmentI>;
}

// build the "to" address(es)
const buildTo = (toEmail: string | Array<string>) => {
  let to;

  if (Array.isArray(toEmail)) {
    to = toEmail.map(email => ({
      email,
    }));
  } else {
    to = toEmail;
  }

  return to;
};

// build personalizations for template data, and multiple addresses
const buildPersonalizations = (
  toEmail: string | Array<string>,
  dynamicTemplateData: DynamicTemplateDataI
) => {
  const email = Array.isArray(toEmail) ? toEmail : [toEmail];
  return email.map((e: string) => {
    return {
      to: buildTo(e),
      dynamicTemplateData,
    };
  });
};

// send the email using a given template and data
export default async (data: DataI) => {
  const {
    templateId,
    fromEmail,
    fromName,
    toEmail,
    dynamicTemplateData,
    attachments,
  } = data;

  // process any attachment(s)
  const attachmentsList = attachments || [];
  const attachmentsProcessed = attachmentsList.map(attachment => {
    let content;
    if (attachment.type === 'text/calendar') {
      content = atob(attachment.content);
    } else {
      content = attachment.content;
    }
    return {
      ...attachment,
      content,
    };
  });

  // build email payload(s)
  const payload = {
    from: {
      email: fromEmail || 'support@caseconsult.net',
      name: fromName || 'Case Consult Network',
    },
    personalizations: buildPersonalizations(toEmail, dynamicTemplateData),
    templateId,
    attachments: attachmentsProcessed,
  };

  // send email(s)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  sgMail.send(payload);

  return Promise.resolve();
};
