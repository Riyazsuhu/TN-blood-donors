//using library for our project
const path=require('path')
const hbs=require('hbs')
const express=require('express')
const port = process.env.PORT || 3000
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
        dev1:{
            dev_name: 'M.Mohamed asik',
            dev_mob_num: +919080500125,
            dev_location: 'Needamangalam'
        },
        dev2:{
            dev_name: 'H.Riyaz ahmed',
            dev_mob_num: +919500665156,
            dev_location: 'chidhambaram'
        }
    })
})
//donar registration route
app.get('/donorregistration',(req,res) =>{
    res.render('donorreg')
})
//donar's details route
app.get('/donordata',(req,res) =>{
    res.render('donordata',{
        dnr1:{
            dnr_name: 'M.Mohamed asik',
            bld_grp: '0+ve',
            mob_num: +919080500125,
            dnr_taluk: 'Needamangalam'
        },
        dnr2:{
            dnr_name: 'H.Riyaz ahmed',
            bld_grp: 'A+ve',
            mob_num: +919500665156,
            dnr_taluk: 'chidhambaram'
        }
    })
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
app.listen(port,()=>{
    log('Blood donor server is started on port', port)
})
