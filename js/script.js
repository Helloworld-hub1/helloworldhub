// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQZ8DYM9PyJD6YmfEgndN89kLw0hOlDCg",
    authDomain: "hwh-contact.firebaseapp.com",
    databaseURL: "https://hwh-contact.firebaseio.com",
    projectId: "hwh-contact",
    storageBucket: "hwh-contact.appspot.com",
    messagingSenderId: "903313203260",
    appId: "1:903313203260:web:2354390bdf65799b1e6339",
    measurementId: "G-8BSBRD73G7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contact-form').addEventListener('submit', SubmitForm);

// Submit form
function SubmitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, email, message);
    
    // Show alert
    document.querySelector('.alert-msg').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
       document.querySelector('.alert-msg').style.display = 'none'; 
    }, 3000);
    
    // Clear form after submit
    document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}




/* Toggle for Menu */
const head = document.querySelector('header');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
});

/* Toggle for Next events */
const eventPeriodNext = document.getElementById('event_period_next');
const eventNext = document.getElementById('event_next');
 eventNext.addEventListener('click', function(){
    eventPeriodNext.classList.toggle('open-event1'); 
 });

/* Toggle for Past events */
const eventPeriodPast = document.getElementById('event_period_past');
const eventPast = document.getElementById('event_past');
 eventPast.addEventListener('click', function(){
    eventPeriodPast.classList.toggle('open-event2'); 
 });