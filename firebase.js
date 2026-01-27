// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbMdjtZ5xUpiUDl0EgtO7Ek9d7-12-tAw",
  authDomain: "om-nosa-baklava.firebaseapp.com",
  databaseURL: "https://om-nosa-baklava-default-rtdb.firebaseio.com",
  projectId: "om-nosa-baklava",
  storageBucket: "om-nosa-baklava.appspot.com",
  messagingSenderId: "768849634836",
  appId: "1:768849634836:web:f961dc50cf2caea9ab2901"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, remove, onValue };
