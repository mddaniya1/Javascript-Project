  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getStorage} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDN5DtZz4bYNDKEGfZ5-ycxmIaLkiWxVWo",
    authDomain: "upload-ee175.firebaseapp.com",
    projectId: "upload-ee175",
    storageBucket: "upload-ee175.appspot.com",
    messagingSenderId: "1030423634322",
    appId: "1:1030423634322:web:99e373f44aa4d8ed31614b",
    measurementId: "G-D1Z8JLQQZE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app)

 export { app, storage }




