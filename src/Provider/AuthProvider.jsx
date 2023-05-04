import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // store all chefs data
  const [chefs, setChefs] = useState([]);
  // Curent user state
  const [user, setUser] = useState(null);
  // spinner
  const [loading, setLoading] = useState(true);

  // fetch data chefs
  useEffect(() => {
    fetch("https://food-mood-server-freelancerjoy.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  // New user Create fucntion
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in function
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user signIn With google
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // user signIn With Gothub
  const signWithgithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  // user Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  // user Profile update
  const profileUpdate = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Share data all react commponents
  const authInfo = {
    user,
    chefs,
    loading,
    createUser,
    signIn,
    signWithGoogle,
    logOut,
    profileUpdate,
    signWithgithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
