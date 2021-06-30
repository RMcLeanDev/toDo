import constants from './../constants';
import firebase from 'firebase';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("user is set")
    var uid = user.uid;
  } else {
    console.log("no one is signed in")
  }
});

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})