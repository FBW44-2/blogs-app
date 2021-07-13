const express = require('express')
const mongoose = require('mongoose')
const {port, mongoURL}= require('./config/env')

mongoose.connect(
    mongoURL
    ,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      } 
)
mongoose.connection.on('error', console.error)
mongoose.connection.on('open',()=>{
    console.log('Database connected!');
});

const app = express()

app.listen(port,()=>{
    console.log('====================================');
    console.log('Server start with port: '+port);
    console.log('====================================');
})
