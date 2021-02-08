const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000;
// path
// console.log(path.join(__dirname,'../public'))

const static_path = path.join(__dirname,'../public');
const template_path = path.join(__dirname,'../src/templates/views');
const partials_path =  path.join(__dirname,'../src/templates/partials');

app.set('view engine', 'hbs');
hbs.registerPartials(partials_path)
app.use(express.static(static_path));


app.set('views',template_path);

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log("3000");
})