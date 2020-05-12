//using library for our project
const path=require('path')
const hbs=require('hbs')
const bodyParser = require('body-parser')
const { Pool, Client }= require('pg')
const express=require('express')
const port = process.env.PORT || 3000
const app=express()
const connectionString = 'postgressql://postgres:Aashiq@1310@localhost:5432/blood donars'
const log=console.log
//path setup for external services
const directory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
//using a static files
app.use(express.static(directory))

app.use(bodyParser.urlencoded({ extended: false}));
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
            dev_name: 'Mohamed asik',
            dev_mob_num: +919080500125,
            dev_location: 'Needamangalam Tamilnadu' 
        },
        dev2:{
            dev_name: 'Riyaz ahmed',
            dev_mob_num: +919500665156,
            dev_location: 'Portonovo Tamilnadu'
        }
    })
})
//donar registration route
app.get('/donarregistration',(req,res) =>{
    res.render('donarreg')
})
//donar's details route
app.get('/donardata',(req, res) => {
    res.render('donardata', {
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
});
//RESTful API to serving data to donars data route
app.get('API',(req,res)=>{
    res.send('API demo')
})
// Inserting donar data
app.post('/donar/add', (req, res) => {
    const { name, mob_num, bld_grp, taluk} = req.body;
    const sql = 'INSERT INTO donars (name, mob_num, bld_grp, taluk) VALUES ($1, $2, $3, $4)'
    const params = [name, mob_num, bld_grp, taluk]
    const client = new Client({ connectionString: connectionString });
    client.connect()
    .then(() => {
        log("connected successfully"); 
        return client.query(sql, params);
    }).then((result) => {
        log("Data inserted")
        
    }).catch((err) => {
        log('not connected', err)
    })
    return res.redirect('/donarregistration');
})
//search for donars
app.post('/donar', (req, res) => {
    log(req.body)
    const { bld_grp, taluk} = req.body;
    const sql= "SELECT name, mob_num, bld_grp, taluk FROM donars  WHERE bld_grp='" + bld_grp + "' AND taluk='" + taluk +"';"
    const client = new Client({ connectionString});
    client.connect()
    .then(() => {
        log("searching donars")
        return client.query(sql);
    })
    .then((result) => {
        const data = result.rows
        log(data)
        return res.send(data)
    })
    .catch((e) => {
        return res.status(500)
    })
    // return res.redirect('/donardata')
})
//404 error handliing page
app.get('*',(req, res)=>{
    res.render('error',{
        title:'404 Error',
        errormessage:'Page not found.'
    })
})
app.listen(port,()=>{
    log('Blood donar server is started on port', port)
})
