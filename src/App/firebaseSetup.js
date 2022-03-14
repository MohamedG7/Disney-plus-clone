import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtbYmXrTaz1q1KXz8MB1bOuRBCsZtnN_U",
  authDomain: "skype-clone-113c0.firebaseapp.com",
  projectId: "skype-clone-113c0",
  storageBucket: "skype-clone-113c0.appspot.com",
  messagingSenderId: "1068164912182",
  appId: "1:1068164912182:web:10291a64a3269a90a9b497",
  measurementId: "G-GXJCYVMNME"
};

const app = initializeApp(firebaseConfig),
      analytics = getAnalytics(app),
      auth = getAuth(),
      provider = new GoogleAuthProvider(),
      db = getFirestore(app),
      storage = getStorage(app);

export {
    auth,
    provider,
    db,
    storage
}