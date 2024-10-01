import { Link } from 'react-router-dom';
import '../SignUp/signUp.css';
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication';
export default function Login(){

    const auth=useAuth();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()

    const handleSubmit=async (e)=>{

        e.preventDefault();
        if(email.length===0 || password.length===0){
            alert('enter all the details properly !')
            return;
        }
        
        console.log({email,password});
        try{
        if(auth )
          if(await auth.loginAction({email:email,password:password}))
            navigate('/dashboard')
            else
            alert('invalid username or password')

        }catch(e){
            console.log('error',e)
        }
    }

    return(
        <>
        <div id="signup-page">
            <div className="signup-box">
                <h2>Log Into Your Account</h2>
                <form onSubmit={handleSubmit}>
                <div className="email-div">
                    <label>E-Mail</label>
                    <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="password-div">
                    <label>Password</label>
                    <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div>
                    <p>Already have an account?      <Link to={'/signup'} style={{color:'blue'}}>      SignUp</Link></p>
                </div>
                <div className='signup-btn'>
                    <button  type='submit' >Login</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}