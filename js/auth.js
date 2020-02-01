var database = firebase.database();

// Initial Values
var fname = "";
var lname = "";
var email = "";
var password = "";
var zipCode = "";
var city = "";
var state = "";

// Capture Button Click to create user
$("#registerBtn").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  fname = $("#exampleFirstName").val();
  lname = $("#exampleLastName").val();
  email = $("#exampleInputEmail").val();
  password = $("#exampleInputPassword").val();
  zipCode = $("#zipCode").val();
  city = $("#city").val().trim();
  state = $("#state").val().trim();


  //syntax to create users in firebase
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
    // Code for handling the push
    database.ref().push({
      fname: fname,
      lname: lname,
      email: email,
      zipCode: zipCode,
      city: city,
      state: state
    });
    window.location = 'login.html';

});

// Capture Button Click and signout
$("#logout").on("click", function(event) {
    event.preventDefault();
  //signOut function
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    
  
});

// Capture Button Click and sign in
$("#login").on("click", function(event) {
    event.preventDefault();
  
    //sign in function
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
      window.location = 'index.html';

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();

  // Console.loging the last user's data
  console.log(sv.email);
  console.log(sv.zipCode);
  console.log(sv.city);
  console.log(sv.state);
  $("#reportTitle").text("Weather Report For the City of "+ sv.city + " " +sv.state);
  // Change the HTML to reflect
  

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
