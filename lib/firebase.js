import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHSO9ly-IlL2nzbsMYEY_Hd0hZh5ij2P8",
    authDomain: "chat-app-a13e6.firebaseapp.com",
    projectId: "chat-app-a13e6",
    storageBucket: "chat-app-a13e6.appspot.com",
    messagingSenderId: "750675994019",
    appId: "1:750675994019:web:0ba8873c4c958ee1b82616",
    measurementId: "G-RH6SS2B09J"
  };

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const auth = getAuth(app)

  export {firestore, auth, app}