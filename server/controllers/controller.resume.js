const { response } = require('express')
const resumeData=require('../model/model.resumeData')
const userModel=require('../model/model.user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
async function  createResume(req,res){

    try{
        const newData=await resumeData.create(
            {
                resumename:req.body.name,
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
                resume_type:req.body.type
              }
        )
        const user=await userModel.findOne({email:req.body.email})
        const resumes=user.resumes
        resumes.push(newData.id)
        const updateduser=await userModel.updateOne({email:req.body.email},{$set:{resumes:resumes}})

        res.status(200).json({'message':'data stored successfully',id:newData.id})
    }catch(e){
         console.log(e)
        res.status(500).send('Server Error')
    }

}

async function updateResumeData(req,res){
    try{
        const updatedData=await resumeData.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        if(!updatedData)
            return res.status(404).json({message:'data not found'})
        res.status(200).json({message:'data updated successfully',updatedData})
    }catch(e){
         res.status(500).json({message: e.message})
    }
}


async function getUserDataByID(req,res){
    try{
        
         const data =await   resumeData.findById(req.params.id);
         
         res.status(200).json({data})
    }catch(e){
         res.status(500).json({message: e.message})
    }
}

async function getResumesByEmail(req,res){
    try{
        const user=await userModel.findOne({email:req.params.email})
        console.log(user)
        if(!user)
            return res.status(404).json({message:'user not found'})
        const resumes=user.resumes
        res.status(200).json({resumes})
    }catch(e){
        res.status(500).json({message: e.message})
    }
}
async function signUp(req,res){
    try{
        const data=req.body;
        if(data.email===undefined || data.password === undefined )
           return res.status(400).json({message:'enter all details properly'})
        const userCheck=await userModel.findOne({email:{$regex:data.email}})
        if(userCheck)
            return res.status(200).json({message:'this email is already registered '})
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(data.password,salt)
        const newUser=await userModel.create(
            {
                email : data.email,
                password : hashedPassword,
                resumes:[]
            })
        res.status(200).json({message:'user created successfully'})


    }catch(e){
         console.log(e)
        res.status(500).json({message:'user created successfully'})
    }
}

async function login(req,res){
    try{
        const data=req.body;
        console.log(data.email);
        const isEmailPresent=await userModel.findOne({email:data.email})
        if(!isEmailPresent)
          return  res.status(400).json({message:'email not signed up'})
        else{
          
          const isMatch=await bcrypt.compare(data.password,isEmailPresent.password);
    
          if(!isMatch)
              res.status(400).json({message :'wrong password'})
          else{
            let payload = { email:data.email};
                const token = jwt.sign(payload, "Secret Key",{expiresIn:"1h"});
                res.status(200).json({token:token,email:data.email});
  
          }
        }
    }catch(e){
          res.status(500).json({message:'server error'})
    }

}
module.exports ={createResume,getUserDataByID,signUp,login,updateResumeData,getResumesByEmail}