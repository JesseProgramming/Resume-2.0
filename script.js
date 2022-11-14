const firebaseConfig = {
    apiKey: "AIzaSyCHJjiGbX-oYqMRzVkk8khfYzvFDvFWXoE",
    authDomain: "resumeemail-bcc6e.firebaseapp.com",
    databaseURL: "https://resumeemail-bcc6e-default-rtdb.firebaseio.com",
    projectId: "resumeemail-bcc6e",
    storageBucket: "resumeemail-bcc6e.appspot.com",
    messagingSenderId: "848438459734",
    appId: "1:848438459734:web:04d69401e27d913460aaf7",
    measurementId: "G-WCTW3NLFCK"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference messages collection
  const messageRef = firebase.database().ref('messages');

  //listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  //submit form
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var message = getInputVal('message');
    var phone = getInputVal('phone');

    //save message
    saveMessage(name,company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    },3000);

    document.getElementById('contactForm').reset();

  }
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveMessage(name,company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
  }