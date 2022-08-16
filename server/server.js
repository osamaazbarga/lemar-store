const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()

//db
require('./config/db')

//app
const app=express()

//middlewares
app.use(morgan("dev"))//to see the information like -GET /api 304 2.133 ms - -
app.use(bodyParser.json({limit:"2mb"}))
app.use(cors())

//route
app.get('/api',(req,res)=>{
    res.json({
        data:'hey you hot API'
    })
})

//port
const port =process.env.PORT||8000;
app.listen(port,()=>console.log(`Server Is rinning on port ${port}`))


