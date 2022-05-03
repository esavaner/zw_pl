// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDDiHGHLs4XBMujDG9BLGyyN63Uuu4qXb8',
    authDomain: 'zw-pl-5ae6e.firebaseapp.com',
    projectId: 'zw-pl-5ae6e',
    storageBucket: 'zw-pl-5ae6e.appspot.com',
    messagingSenderId: '452773807447',
    appId: '1:452773807447:web:bb359741c562bc0ac7aa12',
    measurementId: 'G-RVGD73WR1C',
    databaseURL: 'https://zw-pl-5ae6e-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, storage, database };