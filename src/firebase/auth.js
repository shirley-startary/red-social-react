import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword =
(email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword =
(email, password) => auth.signInWithEmailAndPassword(email, password);

// Sign In Google

export const signInRedes = (provider) => auth.signInWithPopup(provider);

// Sign Out
export const doSignOut =
() => auth.signOut();

// Password Reset
export const doPasswordReset =
(email) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate =
(password) => auth.currentUser.updatePassword(password);

// Update perfil con el nombre y la imagen
export const updateProfile =
(object) => auth.currentUser.updateProfile(object);

export const onAuthStateChanged =
(callback) => auth.onAuthStateChanged(callback)
