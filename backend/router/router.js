const express=require('express')
const router=express.Router()

const service=require('../controller/index')

const routes=(app)=>{
    
    router.post('/contacts_Details',service.contacts_Details)
    app.use('/api',router)
}

module.exports=routes
