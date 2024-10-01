import Form from "../ResumeForm/Form";
import TemplateAmsterdam from "../Templates/Amsterdam";
import TemplateStockholm from "../Templates/stockholm";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './fillResume.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios'
export default function FillResume(){
  const {id} = useParams();

  const [formData,setFormData]=useState({
    fullname:'',
    email: '',
    phone:'',
    objective: '',
    dob:'',
    educations:[],
    internships:[],
    projects:[],
    awards:[],
    certificates:[],
    skills:[],
    hobbies:[],
    languages:[],
    resume_type:''
  })



  function downloadResume(e) {
    e.preventDefault();

    const templateElement = document.getElementById('template');

    // Use html2canvas to take a snapshot of the HTML content
    html2canvas(templateElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // Convert canvas to PNG image data
      const pdf = new jsPDF('p', 'mm', 'a4'); // Initialize jsPDF for A4 size

      // Add the image to the PDF
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio


      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // If content overflows, add new pages
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF with a default file name
      pdf.save('resume.pdf');
    });
  }

  useEffect(()=>{
    axios.get(`http://localhost:2523/userdata/${id}`).then(response=>{
      setFormData(response.data.data)
    }).catch(error=>console.error(error));
  },[])


  let template;
  switch(formData.resume_type){
    case 'Stockholm':
       template=<TemplateStockholm formData={formData}></TemplateStockholm>
    break;
    case 'Amsterdam':
      template=<TemplateAmsterdam formData={formData}></TemplateAmsterdam>
      
  }

  
  
  

    return (
        <>
          <div className='section'>
            <div className='left-section jsx-64b7b46d76bb68b2 mx-auto h-screen overflow-auto py-5 w-full'>
                <Form formData={formData}  updateForm={setFormData} id={id}/>
            </div>
            <div className="right-section overflow-auto">
            <div className="download-div">
                <button id="download-btn" type='button'  onClick={downloadResume}>download</button>
                </div>
                {template}
                
            </div>
          </div>
        </>
    )
}