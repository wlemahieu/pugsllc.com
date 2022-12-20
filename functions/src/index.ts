import * as functions from "firebase-functions";

import doSendEmail from './sendEmail';

interface ErrorI {
  status: number;
  message: string;
  detail: string;
}

export const sendEmail = functions.runWith({ secrets: ["SENDGRID_API_KEY"] }).https.onRequest(async(req, res) => {
  try {
    await doSendEmail(req.body);
    res.status(200).send(true);
  } catch (e: unknown) {
    const err = e as ErrorI;
    console.log('--- RAW ERROR ---', err);
    const {status = 500, message = 'Unknown', detail = 'Unknown'} = err;
    const payload = {
      status,
      message,
      error: detail,
    };
    console.log('### ERROR SENDING EMAIL ###: ', payload);
    res.status(status).send(payload);
  }
});
