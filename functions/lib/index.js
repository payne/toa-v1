"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.holaMundo = functions.https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
});
exports.newUserData = functions.auth.user().onCreate((userRecord, context) => {
    const userId = userRecord.uid;
    const email = userRecord.email;
    console.log(userId);
    console.log(email);
    //return admin.database().ref(`users/${userId}`).
});
//# sourceMappingURL=index.js.map