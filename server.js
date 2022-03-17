const express=require('express')
const moongose=require('mongoose')
const path=require('path')
const app=express()
//router 
const routerHome =require('./routers/home.router')
const routerBooks =require('./routers/books.router')



app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')


//
app.use('/',routerHome)


app.use('/',routerBooks)

/*app.get('/details',(req,res,next)=>{
   
    res.render('details')
})*/
app.get('/about',(req,res,next)=>{
   
    res.render('about')
})
app.get('/contact',(req,res,next)=>{
   
    res.render('contact')
})
app.get('/login',(req,res,next)=>{
   
    res.render('login')
})
app.get('/register',(req,res,next)=>{
   
    res.render('register')
})

app.listen(4000,()=>console.log('server is running'))