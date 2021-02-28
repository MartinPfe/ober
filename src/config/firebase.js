import firebase from "firebase/app";
import "firebase/auth";

console.log("REACT_APP_API_KEY:", process.env.REACT_APP_API_KEY);
console.log("REACT_APP_AUTH_DOMAIN:", process.env.REACT_APP_AUTH_DOMAIN);
console.log("REACT_APP_PROJECT_ID:", process.env.REACT_APP_PROJECT_ID);
console.log("REACT_APP_STORAGE_BUCKET:", process.env.REACT_APP_STORAGE_BUCKET);
console.log(
  "REACT_APP_MESSAGING_SENDER_ID:",
  process.env.REACT_APP_MESSAGING_SENDER_ID
);
console.log("REACT_APP_APP_ID:", process.env.REACT_APP_APP_ID);
console.log("REACT_APP_MEASUREMENT_ID:", process.env.REACT_APP_MEASUREMENT_ID);

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { auth, providers };
export default firebase;
