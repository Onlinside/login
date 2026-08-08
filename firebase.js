import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUZ98Y78ZxCU166qC5EAAupCDPbv0aF9U",
    authDomain: "login-4e334.firebaseapp.com",
    projectId: "login-4e334",
    storageBucket: "login-4e334.firebasestorage.app",
    messagingSenderId: "937085407465",
    appId: "1:937085407465:web:c93de7f716be2480c2a078",
    measurementId: "G-MNNYF7GEN1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
