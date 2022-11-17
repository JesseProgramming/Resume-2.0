const firebaseConfig = {
    apiKey: "AIzaSyBkijwV5wuX5Pr-fOX_i86OsAHsur433sU",
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
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, message);

    //show alert
    document.querySelector('.alert').style.display = "block";

    // Hide alert after 4 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    },4000);

    document.getElementById('contactForm').reset();

  }
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
  }
  //test 2