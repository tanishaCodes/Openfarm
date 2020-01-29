// Initial Values
var email = "";
var password = "";

// Capture Button Click to create user
$(".btn").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  email = $("#exampleInputEmail").val();
  password = $("#exampleInputPassword").val();


  //syntax to create users in firebase
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

});

// Capture Button Click and signout
$(".btn").on("click", function(event) {
    event.preventDefault();
  //signOut function
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    
  
});

// Capture Button Click and sign in
$(".btn").on("click", function(event) {
    event.preventDefault();
  
    //sign in function
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
  
});

window.open();

