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
  //return admin.database().ref(`users/${userId}`).
});
