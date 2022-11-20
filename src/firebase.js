import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAreLWchuyXFOlKSDry5kS5S9D97VvYd_g",
    authDomain: "fb-clone-920d0.firebaseapp.com",
    projectId: "fb-clone-920d0",
    storageBucket: "fb-clone-920d0.appspot.com",
    messagingSenderId: "835000108903",
    appId: "1:835000108903:web:ba2dbec69b7ee1c15fd1c2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
