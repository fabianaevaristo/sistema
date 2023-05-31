import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDxgxUaCQtw03oVHLUAHqYYgr5oEZcLdgk",
  authDomain: "sistema-c0222.firebaseapp.com",
  projectId: "sistema-c0222",
  storageBucket: "sistema-c0222.appspot.com",
  messagingSenderId: "382239471589",
  appId: "1:382239471589:web:2c96a8e413fa3409d7610c",
  measurementId: "G-ECCTVM07B0"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
