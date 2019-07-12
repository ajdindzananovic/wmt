import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBga7bOTc1o0-FUl0Vh48ir6Nh8zwM6rjs",
  authDomain: "forms-test-8874d.firebaseapp.com",
  databaseURL: "https://forms-test-8874d.firebaseio.com",
  projectId: "forms-test-8874d",
  storageBucket: "",
  messagingSenderId: "294226367667",
  appId: "1:294226367667:web:e57835ca5a621bd6"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

//firebaseDB.ref("car/brand").set("Audi");

//firebaseDB.ref("skills").set(["Talking", "Walking"]);

//ADD DATA WITH REF AND SET AND CATCH LOG
// firebaseDB
//   .ref("eyes")
//   .set("green")
//   .then(() => {
//     console.log("data saved");
//   })
//   .catch(e => {
//     console.log(e);
//   });

//DELETE DATA
// firebaseDB
//   .ref("eyes")
//   .remove()
//   .then(() => {
//     console.log("data saved");
//   })
//   .catch(e => {
//     console.log(e);
//   });

// //UPDATE DATA
// firebaseDB.ref("lastname").set("Green");

//UPDATE OBJECTS
// firebaseDB.ref().update({
//   name: "Michael",
//   lastname: "Jackson"
// });

// //GET ONCE DATA
// firebaseDB
//   .ref("car/brand")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => {
//     console.log(e);
//   });

// GET DATA MULTIPLE TTIMES
//THIS IS A REAL TIME DATABASE
//ON is always listening for change and it will give you updated data

// firebaseDB.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   firebaseDB.ref("name").set("name 1");
// }, 3000);

// setTimeout(() => {
//   firebaseDB.ref().off();
// }, 4000);

// setTimeout(() => {
//   firebaseDB.ref("name").set("name 2");
// }, 5000);

// firebaseDB
//   .ref("users")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   });

export { firebaseDB };
