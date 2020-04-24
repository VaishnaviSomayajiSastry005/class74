import * as firebase from 'firebase';
require ('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyANH7oXZwuuy6oPRFywbZxVXjRMnsNWogc",
    authDomain: "wily-app-b999e.firebaseapp.com",
    databaseURL: "https://wily-app-b999e.firebaseio.com",
    projectId: "wily-app-b999e",
    storageBucket: "wily-app-b999e.appspot.com",
    messagingSenderId: "144908157411",
    appId: "1:144908157411:web:45f5c8fb9459b001d3a0d6"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();