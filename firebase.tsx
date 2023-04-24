// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9X6W935aSPRD5dQMYykKwmPtXEx_tUk",
  authDomain: "plazza-b34a2.firebaseapp.com",
  projectId: "plazza-b34a2",
  storageBucket: "plazza-b34a2.appspot.com",
  messagingSenderId: "926459482111",
  appId: "1:926459482111:web:fe64c1dca6206331bfa1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;