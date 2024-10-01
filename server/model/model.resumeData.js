
const mongoose =require('mongoose');
const { type } = require('os');


const resumeDataSchema =new mongoose.Schema({
    resumename:{
        type : String,
    },
    image : {
        type : String,
        default :null
    },

    fullname :{
        type :String
    },

    dob :{
        type :Date
    },

    phone :{
        type : String
    },

    email :{
        type :String
    },
     
    objective:{
        type : String
    },
    
    educations :[{
        institution : String,
        degree : String,
        fieldOfStudy : String,
        grade : String,
        startDate : Date,
        endDate : Date,
        summary : String
    }],

    projects :[{
        title : String,
        link : String,
        startDate : Date,
        endDate : Date,
        summary : String
    }],
     
    awards :[{
        title : String,
        awarder : String,
        date : Date,
        summary : String
    }],

    certificates :[{
        title : String,
        issuer : String,
        date : Date,
        summary : String
    }],

    skills:[{
        name : String,
        level : String,
    }],

    languages :[{
        name : String,
        level : String,
    }],

    internships :[{
        company : String,
        summary : String
    }],

    hobbies :[{
        type: String
    }],

    resume_type : {
        type : String
    }


})

const publicDataModel = mongoose.model('publicdata',resumeDataSchema)

module.exports = publicDataModel