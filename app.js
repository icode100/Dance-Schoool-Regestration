const express = require("express")
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5500;
// express 
app.use('/static',express.static('static'));
app.use(express.urlencoded());
// pug and express integration
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));  //due to this it will by default access the files in the directory present in the app directory and join its path to the views where the search is by default
// endpoint
app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})

// server listening
app.listen(port,()=>{
    console.log(`app is live at port http://localhost:${port}`);
})