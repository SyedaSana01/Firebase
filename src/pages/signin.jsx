import React,{useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";

const auth = getAuth(app);

const SigninPage=()=>{

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSignin=()=>{
    signInWithEmailAndPassword (auth,email,password)
    .then(()=>alert("Signin Success"))
    .catch((error)=>{
        console.error("error during signin",error);
        alert(`Error :${error.message}`)
    });

    };

   
return (
    <div className="signin-page">
        <h1>Sign In</h1>
        <lablel>Email</lablel>
<input onChange={(e)=>setEmail(e.target.value)}
value={email}
type="email"
required 
placeholder="Enter your email here"></input>
<label>Password</label>
<input onChange ={(e)=>setPassword(e.target.value)}
value={password}
type="password"
required
placeholder="Enter your password here"
></input>
<button onClick={handleSignin}>Sign In</button>
    </div>

)
}
export default SigninPage;