var app_fireBase = {};
(function(){

//Initialize Firebase

var config = {
    apiKey: "AIzaSyCYdOP5R026UhYBt4uo3mEH1SPrvCkqSwA",
    authDomain: "rockpapersciz.firebaseapp.com",
    databaseURL: "https://rockpapersciz.firebaseio.com",
    projectId: "rockpapersciz",
    storageBucket: "rockpapersciz.appspot.com",
    messagingSenderId: "39687215133"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()