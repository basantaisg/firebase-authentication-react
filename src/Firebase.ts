// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB60Ycx0VeG-tPmVkxhhxPbq1IAFlKyxi4',
  authDomain: 'authentication-react-fir-622f3.firebaseapp.com',
  projectId: 'authentication-react-fir-622f3',
  storageBucket: 'authentication-react-fir-622f3.firebasestorage.app',
  messagingSenderId: '554082933527',
  appId: '1:554082933527:web:158151645ceaf38751b552',
  measurementId: 'G-VG3SESFEGH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth;
