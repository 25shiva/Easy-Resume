import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { json } from 'react-router-dom';
import './form.css';
import { useAuth } from '../../authentication';
export default function Form({formData,updateForm,id}) {

    const navigate=useNavigate()
    const auth=useAuth()
    const postFormData=async (e)=>{
        e.preventDefault();
        try{
           const response=await axios.put(`http://localhost:2523/formdata/${id}`,
            JSON.stringify(formData),{
            headers:{
                 'Content-Type': 'application/json'
            }
           
        }
        )
        navigate('/resumes')
        }catch(e){
             console.log(e)
        }



    }


    const [showInternshipForm, setShowInternshipForm] = useState(false);
    const [newInternship, setNewInternship] = useState({ company: '', summary: '' })

    const [showEducationForm, setShowEducationForm] = useState(false);
    const [newEducation, setNewEducation] = useState({ institution: '', degree: '', feildOfStudy: '', grade: '', startyear: '', endyear: '', summary: '' })
     
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [newProject, setNewProject] = useState({ title: '', website: '' ,summary: '' });

    const [showAwardForm, setShowAwardForm] = useState(false);
    const [newAward, setNewAward] = useState({ title: '', awarder: '' ,summary: '' });

    const [showCertificateForm, setShowCertificateForm] = useState(false);
    const [newCertificate, setNewCertificate] = useState({ title: '', issuer: '' ,summary: '' });
    
    const [showSkillForm, setShowSkillForm] = useState(false);
    const [newSkill, setNewSkill] = useState({ name: '', level: '' })

    const [showHobbieForm, setShowHobbieForm] = useState(false);
    const [newHobbie, setNewHobbie] = useState('')

    const [showLanguageForm, setShowLanguageForm] = useState(false);
    const [newLanguage, setNewLanguage] = useState({ name: '', level: '' })


    const handleAddInternship = () => {
        setShowInternshipForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewInternship({ ...newInternship, [name]: value })
    }

    const handleSaveInternship = (e) => {
        e.preventDefault();
        let     internships=[...formData.internships,newInternship]
    
        updateForm((formData)=>({...formData,internships }));
        setNewInternship({ company: '', summary: '' });
        setShowInternshipForm(false);
    };

    const deleteInternship = (company) => {
        const internships = formData.internships.filter(intern => intern.company !== company)

        updateForm(formData=>({...formData,internships}));

    }

    const handleAddEducation = () => {
        setShowEducationForm(true);
    };

    const handleChangeInEducation = (e)=>{
        const {name,value}=e.target
        setNewEducation({...newEducation,[name]:value})

    }

    const handleSaveEducation = (e) => {
         e.preventDefault();
         const educations=[...formData.educations,newEducation]
         updateForm(formData=>({...formData,educations}))
         setNewEducation({ institution: '', degree: '', feildOfStudy: '', grade: '', startyear: '', endyear: '', summary: '' })
         setShowEducationForm(false);
    }

    const deleteEducation = (degree) => {
        const educations= formData.educations.filter(education => education.degree!== degree)
        updateForm(formData=>({...formData, educations}));

    }

    const handleAddProject = () => {
        setShowProjectForm(true);
    };

    const handleProjectChange = (e) => {
        const { name, value } = e.target
        setNewProject({ ...newProject, [name]: value })
    }

    const handleSaveProject = (e) => {
        e.preventDefault();

        const projects=[...formData.projects, newProject];
        updateForm(formData=>({...formData, projects}));
        setNewProject({ title:'' , website:'' ,summary:'' });
        setShowProjectForm(false);
    };

    const deleteProject = (title) => {
       const  projects= formData.projects.filter((project,index) =>  project.title!== title)

        updateForm(formData=>({...formData, projects}));

    }

    const handleAddAward = () => {
        setShowAwardForm(true);
    };

    const handleAwardChange = (e) => {
        const { name, value } = e.target
        setNewAward({ ...newAward, [name]: value })
    }

    const handleSaveAward = (e) => {
        e.preventDefault();
        const awards=[...formData.awards, newAward]

        updateForm(formData=>({...formData, awards}));
        setNewAward({ title:'' , awarder:'' ,summary:'' });
        setShowAwardForm(false);
    };

    const deleteAward = (title) => {
        const awards= formData.awards.filter((award,index) =>  award.title!== title)

        updateForm(formData=>({...formData, awards}));

    }

    const handleAddCertificate = () => {
        setShowCertificateForm(true);
    };

    const handleCertificateChange = (e) => {
        const { name, value } = e.target
        setNewCertificate({ ...newCertificate, [name]: value })
    }

    const handleSaveCertificate = (e) => {
        e.preventDefault();

        const certificates=[...formData.certificates, newCertificate]
    
        updateForm(formData=>({...formData, certificates}));
        setNewCertificate({ title:'' , issuer:'' ,summary:'' });
        setShowCertificateForm(false);
    };

    const deleteCertificate= (title) => {
        const certificates= formData.certificates.filter((certificate,index) =>  certificate.title!== title)

        updateForm(formData=>({...formData, certificates}));

    }

    const handleAddSkill = () => {
        setShowSkillForm(true);
    };

    const handleSkillChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setNewSkill({ ...newSkill, [name]: value })
    }

    const handleSaveSkill = (e) => {
        e.preventDefault();

        const skills=[...formData.skills, newSkill]
        updateForm(formData=>({...formData, skills}));
        setNewSkill({ name:'' , level:'' });
        setShowSkillForm(false);
    };

    const deleteSkill= (name) => {
        const skills= formData.skills.filter((skill,index) =>  skill.name!== name)

        updateForm(formData=>({...formData, skills}));

    }

    const handleAddHobbie = () => {
        setShowHobbieForm(true);
    };

    const handleHobbieChange = (e) => {
        setNewHobbie(e.target.value)
    }

    const handleSaveHobbie = (e) => {
        e.preventDefault();
        const hobbies=[...formData.hobbies,newHobbie]
        updateForm(formData=>({...formData, hobbies}));
        setNewHobbie('');
        setShowHobbieForm(false);
    };

    const deleteHobbie= (hobbie) => {
        const hobbies=formData.hobbies.filter(hobbiet=>hobbiet!==hobbie)

        updateForm(formData=>({...formData, hobbies}));

    }

    const handleAddLanguage = () => {
        setShowLanguageForm(true);
    };

    const handleLanguageChange = (e) => {
        const { name, value } = e.target
        setNewLanguage({ ...newLanguage, [name]: value })
    }

    const handleSaveLanguage = (e) => {
        e.preventDefault();

        const languages=[...formData.languages, newLanguage]
        updateForm(formData=>({...formData, languages}));
        setNewLanguage({ language:'' , level:'' });
        setShowLanguageForm(false);
    };

    const deleteLanguage= (language) => {
        const languages= formData.languages.filter((languaget,index) =>  languaget.language!== language)

        updateForm(formData=>({...formData, languages}));

    }

    function changeFormData(e){
        const {name,value}=e.target;
        updateForm((formData)=>({...formData,[name]:value})); 
    
      }

    return (
        <>
        <div>
            <form onSubmit={postFormData}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='fullname' value={formData.fullname} onChange={changeFormData} id="floatingInput" />
                    <label htmlFor="floatingInput">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name='email' value={formData.email} onChange={changeFormData} id="floatingInput" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name='dob' value={formData.dob} onChange={changeFormData} id="floatingInput" />
                    <label htmlFor="floatingInput">Date Of Birth</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='phone' value={formData.phone} onChange={changeFormData} id="floatingInput" />
                    <label htmlFor="floatingInput">Phone</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingTextarea" name='objective' value={formData.objective} onChange={changeFormData} style={{ height: '100px' }}></textarea>
                    <label htmlFor="floatingTextarea2">Career Objective</label>
                </div>

                 <div className="d-flex justify-content-between align-items-center mb-3">
                    <label>Internships</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddInternship}>Add</button>
                </div> 

                {showInternshipForm && (
                    <div className="mb-3 p-3 border rounded">
                        <h5>Add Internship</h5>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="company" value={newInternship.company} onChange={handleChange} required />
                            <label htmlFor="company">Company</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="summary" value={newInternship.summary} onChange={handleChange} style={{ height: '100px' }} required></textarea>
                            <label htmlFor="summary">Summary</label>
                        </div>

                        <button type="button" className="btn btn-success" onClick={handleSaveInternship}>Save</button>

                    </div>
                )}

                {formData.internships && formData.internships.length > 0 && (
                    <div className="mt-3">
                        <h5>Added Internships</h5>
                        <ul className="list-group">
                            {formData.internships.map((internship, index) => (
                                <>
                                 <div key={internship.company}>
                                    <li  className="list-group-item">
                                        <strong>{internship.company}</strong>: {internship.summary}
                                    </li>
                                    <button type='button' className='btn btn-success' onClick={() => deleteInternship(internship.company)}>delete</button>
                                 </div>
                                </>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <label>Education</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddEducation}>Add</button>
                </div>
                {showEducationForm &&
                    <div className="mb-3 p-3 border rounded">
                        <h5>Add Education</h5>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="degree" value={newEducation.degree} onChange={handleChangeInEducation} required />
                            <label htmlFor="degree">degree</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="institution" value={newEducation.institution} onChange={handleChangeInEducation} required />
                            <label htmlFor="institution">Institution</label>
                        </div>

                        <div className='row'>
                            <div class="col">
                                <input type="text" className="form-control" name='feildOfStudy' value={newEducation.feildOfStudy} onChange={handleChangeInEducation} required />
                                <label htmlFor="feildOfstudy">feildOfStudy</label>
                            </div>
                            <div class="col">
                                <input type="text" className="form-control" name='grade' value={newEducation.grade} onChange={handleChangeInEducation} required/>
                                <label htmlFor="grade">Grade</label>
                            </div>
                        </div>
                         
                        <div className='row'>
                            <div class="col">
                                <input type="date" className="form-control" name='startyear' value={newEducation.startyear} onChange={handleChangeInEducation} required />
                                <label htmlFor="startyear">startyear</label>
                            </div>
                            <div class="col">
                                <input type="date" className="form-control" name='endyear' value={newEducation.endyear} onChange={handleChangeInEducation} required/>
                                <label htmlFor="endyear">endyear</label>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="summary" value={newEducation.summary} onChange={handleChangeInEducation} style={{ height: '100px' }} required></textarea>
                            <label htmlFor="summary">Summary</label>
                        </div>

                        <button type="button" className="btn btn-success" onClick={handleSaveEducation}>Save</button>

                    </div>

                }

                {formData.educations && formData.educations.length > 0 &&

                <div className="mt-3">   
                   <h5>Added Education</h5>

                    <ul className='list-group'>
                        {formData.educations.map((education)=>{
                            return(
                                <li key={education.degree} className='list-group-item'>
                                    <strong>{education.institution}</strong>
                                    {education.degree} ({education.feildOfStudy}) - {education.grade} ({education.startyear} - {education.endyear})
                                    <button type='button' className='btn btn-success' onClick={() => deleteEducation(education.degree)}>delete</button>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                }

               <div className="d-flex justify-content-between align-items-center mb-3">
                    <label>Projects</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddProject}>Add</button>
                </div>
                {showProjectForm &&
                    <div className="mb-3 p-3 border rounded">
                        <h5>Add Project</h5>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="title" value={newProject.title} onChange={handleProjectChange} required />
                            <label htmlFor="title">Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="website" value={newProject.website} onChange={handleProjectChange} required />
                            <label htmlFor="website">WebSite</label>
                        </div>


                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="summary" value={newProject.summary} onChange={handleProjectChange} style={{ height: '100px' }} required></textarea>
                            <label htmlFor="summary">Summary</label>
                        </div>

                        <button type="button" className="btn btn-success" onClick={handleSaveProject}>Save</button>

                    </div>

                }

                {formData.projects && formData.projects.length > 0 &&

                <div className="mt-3">   
                   <h5>Added Project</h5>

                    <ul className='list-group'>
                        {formData.projects.map((project,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <strong>{project.title}</strong>
                                    ({project.website}) 
                                    <p>{project.summary}</p>
                                    <button type='button' className='btn btn-success' onClick={() => deleteProject(project.title)}>delete</button>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                }

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <label>Awards</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddAward}>Add</button>
                </div>
                {showAwardForm &&
                    <div className="mb-3 p-3 border rounded">
                        <h5>Add Award</h5>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="title" value={newAward.title} onChange={handleAwardChange} required />
                            <label htmlFor="title">Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="awarder" value={newAward.awarder} onChange={handleAwardChange} required />
                            <label htmlFor="awarder">Awarder</label>
                        </div>


                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="summary" value={newAward.summary} onChange={handleAwardChange} style={{ height: '100px' }} required></textarea>
                            <label htmlFor="summary">Summary</label>
                        </div>

                        <button type="button" className="btn btn-success" onClick={handleSaveAward}>Save</button>

                    </div>

                }

                {formData.awards && formData.awards.length > 0 &&

                <div className="mt-3">   
                   <h5>Added Awards</h5>

                    <ul className='list-group'>
                        {formData.awards.map((award,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <strong>{award.title}</strong>
                                    ({award.website}) 
                                    <p>{award.summary}</p>
                                    <button type='button' className='btn btn-success' onClick={() => deleteAward(award.title)}>delete</button>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                }

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <label>Certificates</label>
                    <button type="button" className="btn btn-primary" onClick={handleAddCertificate}>Add</button>
                </div>
                {showCertificateForm &&
                    <div className="mb-3 p-3 border rounded">
                        <h5>Add Certificate</h5>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="title" value={newCertificate.title} onChange={handleCertificateChange} required />
                            <label htmlFor="title">Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="issuer" value={newCertificate.issuer} onChange={handleCertificateChange} required />
                            <label htmlFor="issuer">Issuer</label>
                        </div>


                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="summary" value={newCertificate.summary} onChange={handleCertificateChange} style={{ height: '100px' }} required></textarea>
                            <label htmlFor="summary">Summary</label>
                        </div>

                        <button type="button" className="btn btn-success" onClick={handleSaveCertificate}>Save</button>

                    </div>

                }

                {formData.certificates && formData.certificates.length > 0 &&

                <div className="mt-3">   
                   <h5>Added Certificates</h5>

                    <ul className='list-group'>
                        {formData.certificates.map((certificate,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <strong>{certificate.title}</strong>
                                    ({certificate.website}) 
                                    <p>{certificate.summary}</p>
                                    <button type='button' className='btn btn-success' onClick={() => deleteCertificate(certificate.title)}>delete</button>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                }

                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <label>Skills</label>
                    <button type='button' className='btn btn-primary' onClick={handleAddSkill}>Add</button>
                </div>
                { showSkillForm &&
                <div>
                  <div className='row mb-3 p-3 border rounded'>
                    <div className='col form-floating mb-3'>
                        <input type='text' className='form-control' name='name' value={newSkill.name} onChange={handleSkillChange}></input>
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className='col form-floating mb-3'>
                        <select className='form-select' name='level'  value={newSkill.level} onChange={handleSkillChange}>
                            <option value='choose..'> choose....</option>
                            <option value='Beginner' >Beginner</option>
                            <option value='Intermediate'>Intermediate</option>
                            <option value='Expert'>Expert</option>

                        </select>
                        <label htmlFor='level'>level</label>
                    </div>
                  </div>
                  <button type="button" className="btn btn-success" onClick={handleSaveSkill}>Save</button>
                  </div>
                  
                }

                { formData.skills &&
                    formData.skills.length > 0 && 

                    <div className="mt-3">   
                   <h5>Added Skills</h5>

                    <ul className='list-group'>
                        {formData.skills.map((skill,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <div className='row'>
                                    <strong className='col'>{skill.name}</strong>
                                    <strong className='col'>{skill.level}</strong>
                                    <button type='button' className='btn btn-success' onClick={() => deleteSkill(skill.name)}>delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                    
                }
            
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <label>Hobbies</label>
                    <button type='button' className='btn btn-primary' onClick={handleAddHobbie}>Add</button>
                </div>

                {showHobbieForm &&

                <div className='mb-3 p-3 border rounded'>
                    <div className='form-floating'>
                        <input className='form-control' type='text' name='hobbie' value={newHobbie} onChange={handleHobbieChange}></input>
                        <label htmlFor='hobbie'>Hobbie</label>
                    </div>
                    <button type='button' className='btn btn-success' onClick={handleSaveHobbie}>Save</button>
                </div>

                }
                
                {formData.hobbies &&
                    formData.hobbies.length > 0 &&
                    <div className="mt-3">   
                   <h5>Added Hobbies</h5>

                    <ul className='list-group'>
                        {formData.hobbies.map((hobbie,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <div className='row'>
                                    <h6 className='col'>{hobbie}</h6>
                                    <button type='button' className='btn btn-success' onClick={() => deleteHobbie(hobbie)}>delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                
                }

             <div className='d-flex justify-content-between align-items-center mb-3'>
                    <label>Languages</label>
                    <button type='button' className='btn btn-primary' onClick={handleAddLanguage}>Add</button>
                </div>
                { showLanguageForm &&
                <div>
                  <div className='row mb-3 p-3 border rounded'>
                    <div className='col form-floating mb-3'>
                        <input type='text' className='form-control' name='language' value={newLanguage.language} onChange={handleLanguageChange}></input>
                        <label htmlFor='language'>Language</label>
                    </div>
                    <div className='col form-floating mb-3'>
                        <select className='form-select' name='level'  value={newLanguage.level} onChange={handleLanguageChange}>
                            <option value='choose..'> choose....</option>
                            <option value='Beginner' >Beginner</option>
                            <option value='Intermediate'>Intermediate</option>
                            <option value='Expert'>Expert</option>

                        </select>
                        <label htmlFor='level'>level</label>
                    </div>
                  </div>
                  <button type="button" className="btn btn-success" onClick={handleSaveLanguage}>Save</button>
                  </div>
                  
                }

                {formData.languages &&
                    formData.languages.length > 0 && 

                    <div className="mt-3">   
                   <h5>Added Languages</h5>

                    <ul className='list-group'>
                        {formData.languages.map((languaget,index)=>{
                            return(
                                <li key={index} className='list-group-item'>
                                    <div className='row'>
                                    <strong className='col'>{languaget.language}</strong>
                                    <strong className='col'>{languaget.level}</strong>
                                    <button type='button' className='btn btn-success' onClick={() => deleteLanguage(languaget.language)}>delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                      
                        
                </div>
                    
                } 

                 <button className='btn btn-primary' type='submit' >submit</button>  
            </form>
            </div>
        </>
    );
}
