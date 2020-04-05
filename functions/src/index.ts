import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


 exports.deleteUser = functions.firestore
   .document('user/{userID}')
   .onDelete((snapshot, context)=>{
     const deleteUser =  snapshot.data();
     const id = context.params.userID;
      if (deleteUser){
     return admin.auth().deleteUser(id);
      }
      return  Promise.resolve();
   })
