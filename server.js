import express from 'express'
// import color from 'colors' 
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDb from './Config/db.js';

dotenv.config();

// rest object
const app=express();

//database config

connectDb();

// moddleware

app.use(express.json());
app.use(morgan('dev'))

// rest api
app.get('/',(req,res)=>{

    res.send("Hello")

 })

//  PORT
 const PORT=8080;
// run listen
 app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode at ${PORT}`.bgCyan.white)
 })