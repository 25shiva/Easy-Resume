const express = require('express')

const app = express()

const cors= require('cors')

const controllers=require('./controllers/controller.resume')

const port = 2523

const uri='mongodb+srv://pasulashivachetanreddy:u3EEPcmciHDoofiK@cluster0.mxozr.mongodb.net/resumeBuilder?retryWrites=true&w=majority&appName=Cluster0'

app.use(cors())

app.use(express.json())
app.listen(port,()=>{
    console.log('server is running on port'+port)
})

const mongoose = require('mongoose')

mongoose.connect(uri).then(()=>{
    console.log('Connection successful')
}).catch(()=>{
    console.log('Connection failed')
})


app.post('/formdata/', controllers.createResume)

app.put('/formdata/:id', controllers.updateResumeData)

app.get('/userdata/:id',controllers.getUserDataByID)

app.get('/resumes/:email', controllers.getResumesByEmail)

app.post('/signup/',controllers.signUp)

app.post('/login/',controllers.login)