const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log("notification added" , doc))
})

exports.projectCreated = functions.firestore
    .document('projects/{project}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content : 'New project added',
            user : `${project.autherFirstName} ${project.autherLastName}`,
            time : admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
