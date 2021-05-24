import firebase from 'firebase';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


    apiKey: "AIzaSyDQOJhUVnxhhw1DHsQ_waX1_s9AbRgTpHM",
    authDomain: "spotify-clone-3a3af.firebaseapp.com",
    databaseURL: "https://spotify-clone-3a3af.firebaseio.com",
    projectId: "spotify-clone-3a3af",
    storageBucket: "spotify-clone-3a3af.appspot.com",
    messagingSenderId: "600707340328",
    appId: "1:600707340328:web:a14b467ddec930c05b7d1d",
    measurementId: "G-YLHNCF12C3"
  };
  const firebaseapp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;
