require('dotenv').config();         
// This code initializes an Express server with CORS and JSON body parsing enabled. 
// It listens on a port specified in the environment variables. 
 

const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');




const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const getConnection=() => { 
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}





app.listen(process.env.PORT,()=>{
    console.log('Server is running on port : ' +process.env.PORT ); 
}); 