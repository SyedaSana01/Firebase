import {useState,useEffect} from 'react';
import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth';

import './App.css';
import SignupPage from './pages/signup.jsx';
import SigninPage from './pages/signin.jsx';

const auth = getAuth();

function App(){
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const unsubscribe=(auth,(setUser)=>{

   
    if(user){
      setUser(user);
      
    }else{
      setUser(null);
    }
    return ()=> unsubscribe();
  },[]);
});


  if(user===null)
{
  return(
    <div className="App">
      <h1>Firebase App</h1>
      <SignupPage/>
      <SigninPage />

    </div>
  )

}else{
  return (
  <div>
    <h1>Hello {user.email}</h1>
<button onClick={()=>signOut(auth)}>Log Out</button>
</div>
  )
}
}
export default App;


