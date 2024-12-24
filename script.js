// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY6O_qIIv7hgZuBBh2WPGWjpowVEVRafM",
  authDomain: "loginpage-1-53161.firebaseapp.com",
  projectId: "loginpage-1-53161",
  storageBucket: "loginpage-1-53161.appspot.com",
  messagingSenderId: "568246857832",
  appId: "1:568246857832:web:6263efc6c02492aff28bdd",
  measurementId: "G-0QJZMN18XT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle login form submission
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Firebase Authentication login
    await auth.signInWithEmailAndPassword(username, password);

    // Show success message
    const successAlert = document.getElementById("success-alert");
    successAlert.innerText = "Login Successful";
    successAlert.style.display = "block";

    // Hide error alert if shown
    const errorAlert = document.getElementById("error-alert");
    errorAlert.style.display = "none";

  } catch (error) {
    // Show error message
    const errorAlert = document.getElementById("error-alert");
    if (error.code === "auth/wrong-password") {
      errorAlert.innerText = "Incorrect password, please try again.";
    } else if (error.code === "auth/user-not-found") {
      errorAlert.innerText = "No user found with this email.";
    } else if (error.code === "auth/invalid-login-credentials") {
      errorAlert.innerText = "Invalid login credentials, please check your email and password.";
    } else {
      errorAlert.innerText = `Error: ${error.message}`;
    }
    errorAlert.style.display = "block";

    // Hide success alert if shown
    const successAlert = document.getElementById("success-alert");
    successAlert.style.display = "none";
  }
});
