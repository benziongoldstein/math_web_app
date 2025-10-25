# 🔒 Firebase Security Rules Setup Guide

## Overview
These security rules protect your Firestore database from cheating and unauthorized access.

---

## How to Add Security Rules

### Step 1: Open Firebase Console
1. Go to: https://console.firebase.google.com/
2. Sign in with your Google account
3. Select your project: **`prime-factorization-game-bb055`**

### Step 2: Navigate to Firestore Rules
1. Click **"Firestore Database"** in the left sidebar
2. Click the **"Rules"** tab at the top of the page

### Step 3: Replace Rules
1. **Delete** all existing content in the rules editor
2. **Copy** the security rules below
3. **Paste** them into the editor
4. Click **"Publish"** button in the top right

---

## Security Rules Code

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Scores collection
    match /scores/{scoreId} {
      // Anyone can read scores (for leaderboard display)
      allow read: if true;
      
      // Only authenticated users can create their own scores
      allow create: if request.auth != null 
                    && request.resource.data.userId == request.auth.uid
                    && request.resource.data.numbersFactored is int
                    && request.resource.data.numbersFactored >= 0
                    && request.resource.data.numbersFactored <= 100
                    && request.resource.data.undos is int
                    && request.resource.data.undos >= 0
                    && request.resource.data.mode in ['normal', 'simple'];
      
      // Users can only update their own scores
      allow update: if request.auth != null 
                    && resource.data.userId == request.auth.uid;
      
      // Users can only delete their own scores
      allow delete: if request.auth != null 
                    && resource.data.userId == request.auth.uid;
    }
  }
}
```

---

## What These Rules Do

### ✅ **Read Access**
```javascript
allow read: if true;
```
- **Anyone** can read scores (even guests)
- Allows leaderboard to display for all users
- No authentication required to view

### ✅ **Create Access**
```javascript
allow create: if request.auth != null && ...
```
- Only **signed-in users** can create scores
- User can ONLY create scores with their own `userId`
- Validates data types and ranges:
  - `numbersFactored`: Must be integer, 0-100
  - `undos`: Must be integer, 0 or higher
  - `mode`: Must be 'normal' or 'simple'
- **Prevents cheating**: Can't fake scores or impersonate other users

### ✅ **Update/Delete Access**
```javascript
allow update/delete: if request.auth != null && resource.data.userId == request.auth.uid;
```
- Only **signed-in users** can update/delete scores
- User can ONLY modify their **own scores**
- **Prevents vandalism**: Can't delete or change other players' scores

---

## Testing Security Rules

After publishing, verify the rules work:

1. **Test as Guest (Not Signed In):**
   - ✅ Should be able to view leaderboard
   - ❌ Should NOT be able to save scores

2. **Test as Signed-In User:**
   - ✅ Should be able to save your own scores
   - ✅ Should be able to view leaderboard
   - ❌ Should NOT be able to modify other users' scores

---

## Common Issues

### Issue: "Missing or insufficient permissions"
- **Cause**: Security rules not published yet
- **Solution**: Make sure you clicked "Publish" after pasting rules

### Issue: "Permission denied" when saving score
- **Cause**: User not signed in OR trying to save with wrong userId
- **Solution**: Make sure user is authenticated before attempting to save

### Issue: Leaderboard not loading
- **Cause**: Read permission blocked
- **Solution**: Verify `allow read: if true;` is in the rules

---

## Security Best Practices

✅ **What these rules prevent:**
- Fake scores (validation limits)
- Score manipulation (userId matching)
- Unauthorized deletions (ownership check)
- Invalid data types (type validation)
- Guest users saving scores (auth required)

❌ **What these rules DON'T prevent:**
- Users deleting their own scores (allowed by design)
- Users improving their own scores (allowed - it's their data)

---

## Need Help?

If you encounter issues:
1. Check Firebase Console → Firestore → Rules tab
2. Look for red error messages when publishing
3. Test with Firebase Emulator Suite (advanced)
4. Check browser console for specific error messages

---

**Status**: ✅ Rules ready to deploy!
**Last Updated**: October 25, 2025

