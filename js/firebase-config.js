// Firebase Configuration
// This connects your game to your Firebase project
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBY75uVzOfxLjtwANPTU3PrvLpM3wlkaXU",
  authDomain: "prime-factorization-game-bb055.firebaseapp.com",
  projectId: "prime-factorization-game-bb055",
  storageBucket: "prime-factorization-game-bb055.firebasestorage.app",
  messagingSenderId: "898057111449",
  appId: "1:898057111449:web:9abc11c5656dc55db4f508",
  measurementId: "G-RCSMK3YF6D"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized successfully');
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}

// Get Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

console.log('✅ Firebase Auth loaded:', !!auth);
console.log('✅ Firebase Firestore loaded:', !!db);

// Export for use in other files (optional, for organization)
// These are available globally since we're using script tags

