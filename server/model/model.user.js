const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email :{
        type : String
    },
    password :{
        type : String
    },
    resumes:[
       { type : mongoose.Schema.Types.ObjectId ,ref:'publicdata'}
    ]
})

const userModel=mongoose.model('user',userSchema)

module.exports=userModel;