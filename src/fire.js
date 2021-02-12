import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBjsbaJGsQ6vP76fctx968Th2UF6Sgnb2o",
    authDomain: "task-b414c.firebaseapp.com",
    projectId: "task-b414c",
    storageBucket: "task-b414c.appspot.com",
    messagingSenderId: "26280390505",
    appId: "1:26280390505:web:7aeaee7748ec3ffa4017f8"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;