import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDQPrEr1T5q0YAC4IEmFQDterAHKtsaLQ8",
  authDomain: "ecommerce-e7347.firebaseapp.com",
  projectId: "ecommerce-e7347",
  storageBucket: "ecommerce-e7347.appspot.com",
  messagingSenderId: "1037826686011",
  appId: "1:1037826686011:web:ae726aac146f2f9dbcf01e"
};


firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
