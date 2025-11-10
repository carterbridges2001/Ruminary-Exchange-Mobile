import { initializeApp } from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXkHC4uY27W-qYQPkEy7BtbVdnmPzECps",
  authDomain: "goatique-536bd.firebaseapp.com",
  projectId: "goatique-536bd",
  storageBucket: "goatique-536bd.firebasestorage.app",
  messagingSenderId: "63709506575",
  appId: "1:63709506575:android:79a1f6bb68ebe76659077a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
