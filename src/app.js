//using library for our project
const path=require('path')
const hbs=require('hbs')
const express=require('express')
const app=express()
const log=console.log
//path setup for external services
const directory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
//using a static files
app.use(express.static(directory))
//setup using hbs files
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//All RESTful routes
//index route
app.get("",(req,res)=>{
    res.render('index')
})
//donate us route
app.get('/donateus',(req,res)=>{
    res.render('donateus',{
        bankDetails:'all bank details'
    })
})
//about route
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Riyaz ahmed',
        location:'Parangipettai',
        mobileno:'+919500665156',
        name1:'Mohamed aasik',
        location1:'Nidamangalam',
        mobileno1:'+919080500125'
    })
})
//donar registration route
app.get('/donarregistration',(req,res) =>{
    res.render('donarreg')
})
//donar's details route
app.get('/donardata',(req,res) =>{
    res.render('donardata')
})
//RESTful API to serving data to donars data route
app.get('API',(req,res)=>{
    res.send('API demo')
})
//404 error handliing page
app.get('*',(req, res)=>{
    res.render('error',{
        title:'404 Error',
        errormessage:'Page not found.'
    })
})
app.listen(3000,()=>{
    log('Blood donar server is started server is stated')
})
