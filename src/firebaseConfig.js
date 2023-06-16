import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyAtpQDdoNbt222e2ACyxuzDGUW4UFXcHeU",
  authDomain: "typing-test-37-c7906.firebaseapp.com",
  projectId: "typing-test-37-c7906",
  storageBucket: "typing-test-37-c7906.appspot.com",
  messagingSenderId: "25434597125",
  appId: "1:25434597125:web:066d00b16999a96a6eb96c",
  measurementId: "G-5269B1WGK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

// <------------------------------------------------------------------->

