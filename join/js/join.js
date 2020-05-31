// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyu--IsIvu4Y6Q6UW2w_vCOzT9uMoTSD0",
    authDomain: "hwh-join-87c2d.firebaseapp.com",
    databaseURL: "https://hwh-join-87c2d.firebaseio.com",
    projectId: "hwh-join-87c2d",
    storageBucket: "hwh-join-87c2d.appspot.com",
    messagingSenderId: "738676928106",
    appId: "1:738676928106:web:2893d6b957339f26cf2413",
    measurementId: "G-KG1L2THEQC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Reference messages collection
var joinRef = firebase.database().ref('join');

//Listen for form submit
document.getElementById('join-form').addEventListener('submit', SubmitForm);

// Submit form
function SubmitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal('full-name');
    var email = getInputVal('email');
    var number = getInputVal('number');
    var address = getInputVal('address');
    var birthday = getInputVal('birthday');
    var country = getInputVal('country');
    var occupation = getInputVal('occupation');
    
    // Save message
    saveMessage(name, email, number, address, birthday, country, occupation);
    
    // Show alert
    document.querySelector('.alert-msg').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
       document.querySelector('.alert-msg').style.display = 'none'; 
    }, 3000);
    
    // Clear form after submit
    document.getElementById('join-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, number, address, birthday, country, occupation){
    var newjoinRef = joinRef.push();
    newjoinRef.set({
        name: name,
        email: email,
        number: number,
        address: address,
        birthday: birthday,
        country: country,
        occupation: occupation
    });
}
