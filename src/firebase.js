// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrY12yEYWsmp4wWMt7EhNtBJPVmtFYQMg",
  authDomain: "str3mgg.firebaseapp.com",
  projectId: "str3mgg",
  storageBucket: "str3mgg.appspot.com",
  messagingSenderId: "755792708633",
  appId: "1:755792708633:web:9c86ae3773c8babfb49688",
  measurementId: "G-6PTLMZVWCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

const auth = getAuth(app);
auth.useDeviceLanguage()

export {auth, provider}