import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBear_Zy5XQ0-RUaKJF9SwSpkFGk8muRc",
    authDomain: "manager-a5dc6.firebaseapp.com",
    databaseURL: "https://manager-a5dc6.firebaseio.com",
    projectId: "manager-a5dc6",
    storageBucket: "manager-a5dc6.appspot.com",
    messagingSenderId: "261697756811",
    appId: "1:261697756811:web:a2972e599972660b"
};
const Firebase=firebase.initializeApp(firebaseConfig);
export default Firebase;