// Initialize Firebase (again to ensure it's available on the new page)
firebase.initializeApp({
    apiKey: "AIzaSyCY6O_qIIv7hgZuBBh2WPGWjpowVEVRafM",
    authDomain: "loginpage-1-53161.firebaseapp.com",
    projectId: "loginpage-1-53161",
    storageBucket: "loginpage-1-53161.appspot.com",
    messagingSenderId: "568246857832",
    appId: "1:568246857832:web:6263efc6c02492aff28bdd",
    measurementId: "G-0QJZMN18XT",
  });
  
  // Check if the user is authenticated
  const user = firebase.auth().currentUser;
  
  if (user) {
    // If user is logged in, show "Hello World"
    document.getElementById("greeting").textContent = "Hello World";
  } else {
    // If no user is logged in, redirect back to login page
    window.location.href = "index.html";
  }
  