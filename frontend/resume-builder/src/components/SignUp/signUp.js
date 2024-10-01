import { Link } from 'react-router-dom';
import './signUp.css';
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignUp(){

    const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');

    const handleSubmit=async (e)=>{

        e.preventDefault();
        if(!email || !password || !cpassword){
            alert('enter all the details properly !')
            return;
        }
        
        if(password!==cpassword){
            alert("passwords doesn't match !")
            return

        }

        try{
          const response=await axios.post('http://localhost:2523/signup/',
            JSON.stringify({
               email,
               password
            }),{
            headers:{
                'Content-Type':'application/json'
            }
           } 
          )
          alert(response.data.message)
          navigate('/')
        }catch(e){
            console.log('error',e)
            
        }
    }

    return(
        <>
        <div id="signup-page" >
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div className="email-div">
                    <label>E-Mail</label>
                    <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="password-div">
                    <label>Password</label>
                    <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div className="cpassword-div">
                    <label>Confirm Password</label>
                    <input type='password' name='cpassword' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}></input>
                </div>
                <div>
                    <p>Already have an account?      <Link to={'/login'} style={{color:'blue'}}>      Login</Link></p>
                </div>
                <div className='signup-btn'>
                    <button  type='submit' >signUp</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}