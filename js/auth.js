// Authentication Logic
// Handles Google Sign-In, Sign-Out, and User State

let currentUser = null;

// Initialize authentication state listener
function initAuth() {
    console.log('🔧 initAuth() called');
    
    if (typeof auth === 'undefined') {
        console.error('❌ Firebase Auth is not defined!');
        return;
    }
    
    // Listen for authentication state changes
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            currentUser = user;
            console.log('User signed in:', user.displayName);
            updateUIForSignedInUser(user);
        } else {
            // User is signed out
            currentUser = null;
            console.log('User signed out');
            updateUIForSignedOutUser();
        }
    });
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        console.log('Successfully signed in:', user.displayName);
        
        // User info is automatically updated by onAuthStateChanged
        return user;
    } catch (error) {
        console.error('Error signing in:', error);
        alert('Failed to sign in. Please try again.');
        return null;
    }
}

// Sign out
async function signOut() {
    try {
        await auth.signOut();
        console.log('Successfully signed out');
    } catch (error) {
        console.error('Error signing out:', error);
        alert('Failed to sign out. Please try again.');
    }
}

// Update UI when user is signed in
function updateUIForSignedInUser(user) {
    // Show user profile
    const userProfile = document.getElementById('user-profile');
    const userPhoto = document.getElementById('user-photo');
    const userName = document.getElementById('user-name');
    const signInBtn = document.getElementById('sign-in-btn');
    
    if (userProfile && userPhoto && userName) {
        userProfile.style.display = 'flex';
        userName.textContent = user.displayName || 'User';
        
        // Set photo (or use default)
        if (user.photoURL) {
            userPhoto.src = user.photoURL;
        } else {
            // Default avatar (data URL for a simple user icon)
            userPhoto.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzY2N2VlYSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjciIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNIDggMzAgUSA4IDIyIDIwIDIyIFEgMzIgMjIgMzIgMzAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=';
        }
    }
    
    // Hide sign-in button
    if (signInBtn) {
        signInBtn.style.display = 'none';
    }
}

// Update UI when user is signed out
function updateUIForSignedOutUser() {
    // Hide user profile
    const userProfile = document.getElementById('user-profile');
    const signInBtn = document.getElementById('sign-in-btn');
    
    if (userProfile) {
        userProfile.style.display = 'none';
    }
    
    // Show sign-in button
    if (signInBtn) {
        signInBtn.style.display = 'flex';
    }
}

// Get current user
function getCurrentUser() {
    return currentUser;
}

// Check if user is signed in
function isSignedIn() {
    return currentUser !== null;
}

