// /*MENU SHOW Y HIDDEN*/ 

const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})

// /* Firebase Connection */

// // Your web app's Firebase configuration

// var firebaseConfig = {
//     apiKey: "AIzaSyCYdJw9K50KIrfcDQ2U_AvuC-L-DqLd-A4",
//     authDomain: "portfoliocontactform-58ad5.firebaseapp.com",
//     projectId: "portfoliocontactform-58ad5",
//     storageBucket: "portfoliocontactform-58ad5.appspot.com",
//     databaseURL: "https://portfoliocontactform-58ad5-default-rtdb.firebaseio.com/",
//     messagingSenderId: "3700531160",
//     appId: "1:3700531160:web:14de5865cd9d3ab3651cad",
//     measurementId: "G-746D64VR32"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// //Reference collection
// var messagesRef = firebase.database().ref('messages');
// // var subscribersRef = firebase.database().ref('subscribers');
  
// // Listen for Form Submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);
// // document.getElementById('subForm').addEventListener('submit', submitSubForm);

// //Submit form
// function submitForm(e){
//     e.preventDefault();
//     //Get values
//     var name = getInputVal('Name');
//     var email = getInputVal('Email');
//     var message = getInputVal('Message');

//     saveMessage(name,email,message);
//     //Show alert
//     document.querySelector('.alert').style.display = 'block';

//     //Hide alert after 3 s
//     setTimeout(function() {
//         document.querySelector('.alert').style.display = 'none';
//     }, 3000);

//     //Clear form
//     document.getElementById('contactForm').reset();
// }


// // Function to get form values

// function getInputVal(id){
//     return document.getElementById(id).value;
// }

// //Save message to firebase

// function saveMessage(name, email, message){
//     var newMessageRef =  messagesRef.push();
//     newMessageRef.set({
//         name: name,
//         email: email,
//         message: message,
//     });
// }

// //Submit form
// function submitSubForm(e){
//     e.preventDefault();
//     //Get values
//     var subscribeemail = getInputEmail('SubscribeEmail');

//     saveSubEmail(subscribeemail);
//     console.log(subscribeemail);
//     //Show alert
//     document.querySelector('.alert').style.display = 'block';

//     //Hide alert after 3 s
//     setTimeout(function() {
//         document.querySelector('.alert').style.display = 'none';
//     }, 3000);

//     //Clear form
//     document.getElementById('subForm').reset();
// }

// // Function to get form values

// function getInputEmail(id){
//     return document.getElementById(id).value;
// }

// //Save message to firebase

// function saveSubEmail(subscribeemail){
//     var newSubscribersRef =  subscribersRef.push();
//     newSubscribersRef.set({
//         subscribeemail: subscribeemail,
//     })
// }


