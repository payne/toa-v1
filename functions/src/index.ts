import * as functions from 'firebase-functions';
const nodemailer = require('nodemailer');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const holaMundo = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

export const newUserData = functions.auth.user().onCreate((userRecord, context) => 
{ 
  const userId = userRecord.uid;
  const email = userRecord.email; 
  console.log(userId);
  console.log(email);
  const displayName = userRecord.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendWelcomeEmail(email, displayName);
});


// Start with https://github.com/firebase/functions-samples/blob/Node-8/quickstarts/email-users/functions/index.js
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Cloud Storage for Firebase quickstart';

// [START sendWelcomeEmail]
/**
 * Sends a welcome email to new user.
// [START onCreateTrigger]
export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// [END onCreateTrigger]
  // [START eventAttributes]
  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendWelcomeEmail(email, displayName);
});
 */
// [END sendWelcomeEmail]


// Sends a welcome email to the given user.
async function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
    subject: `Welcome to ${APP_NAME}!`,
    text:  `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`,
  };

  // The user subscribed to the newsletter.
  await mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return null;
}
