import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAnW2vXE_B9yR6NcxB1IDippFsgSBD2rLg',
  authDomain: 'manager-9add0.firebaseapp.com',
  databaseURL: 'https://manager-9add0.firebaseio.com',
  projectId: 'manager-9add0',
  storageBucket: 'manager-9add0.appspot.com',
  messagingSenderId: '19836231957',
  appId: '1:19836231957:web:5dac88cbee7fad28f7c91c'
};
// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);

export const db = App.database();
