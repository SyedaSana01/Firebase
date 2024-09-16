// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "../firebase";  // Firebase initialized in firebase.js


// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
   
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Signup Success!"))
      
      };
      const signInWithGoogle= ()=>{
        signInWithPopup(auth, googleProvider)
        
      }
  

  return (
    <div className='signup-page'>
        <h1>Sign Up</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"
      />

      <button onClick={handleSignup}>Sign Up</button>
      <br/>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default SignupPage;
