  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgENonUJ9sDAAjPt1yh4DXOWx7egvwm6g",
    authDomain: "meyoube-8e726.firebaseapp.com",
    databaseURL: "https://meyoube-8e726.firebaseio.com",
    projectId: "meyoube-8e726",
    storageBucket: "meyoube-8e726.appspot.com",
    messagingSenderId: "70459874269"
  };
  firebase.initializeApp(config);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });