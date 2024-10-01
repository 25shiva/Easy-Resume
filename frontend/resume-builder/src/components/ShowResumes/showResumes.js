import {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './showResumes.css'
import axios from 'axios';
import { useAuth } from '../../authentication';
export default function ShowResumes(){
   const navigate=useNavigate()
   const [resumes,setResumes]=useState([]);

  const auth=useAuth()
   
   useEffect(()=>{
  
    
    axios.get(`http://localhost:2523/resumes/${auth.email}`)
    .then(res=>fetchResumeDetails(res.data.resumes))
    .catch(err=>console.log(err))
   },[]);

  async function fetchResumeDetails(data){
    const resumeDetailPromises = data.map(async (resume) => {
      return axios
        .get(`http://localhost:2523/userdata/${resume}`)
        .then(res => res.data.data)
        .catch(err => {
          console.log(err);
          return null; // Return null if there was an error
        });
    });

    // Wait for all promises to resolve
    const resolvedResumes = await Promise.all(resumeDetailPromises);

    // Filter out any null values and update state
    const validResumes = resolvedResumes.filter(resume => resume !== null);
    setResumes(validResumes);
    console.log(validResumes)
  }
    return (
        <>
          <h1>Resumes</h1>
          <div className="resume-div">
            <ul className='resume-list'>
            <div className="resume-item" onClick={(e)=>{e.preventDefault();navigate('/displaytemplates')}}>
                    <div >
                        <li >
                            <div className='resume-name'>
                                <h2 style={{color:'red'}}>CREATE</h2>
                                <symbol style={{fontSize:'40px', color:''}}>+</symbol>
                            </div>
                        </li>
                    </div>
                </div>
            {resumes && resumes.length>0 &&
            resumes.map((resume,index)=>{
              return(
                <div key={index} >
                <div className="resume-item" onClick={(e)=>{navigate(`/fillresume/${resume._id}`)}}>
                    <div >
                        <li >
                            <div className='resume-name'>
                                <h2>{resume.resumename}</h2>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
              )
            })

            }
            </ul>
          </div>
         
        </>
    )

}