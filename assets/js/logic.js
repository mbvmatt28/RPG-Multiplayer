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

  function submitCreateAccount() {
      var displayName = document.querySelector("#entry-displayname");
      var email = document.querySelector("#entry-email");
      var password = document.querySelector("#entry-password");

      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(function(user)){
          // add the display name
          user.updateProfile({displayName: displayName.value});
      }
      console.log(submitCreateAccount)
  }

  function signInWithEmailAndPassword () {
      var email = document.querySelector("#email");
      var password = document.querySelector("#password");

      firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  }

  firebase.auth().onAuthStateChanged(authStateChangeListener);

  function authStateChangeListener(user) {
      //signin
      if (user) {
          //display operations
          Chat.onlogin();
          Game.onlogin();
          //sign out
      } else { 
          window.location.reload();
      }
  }