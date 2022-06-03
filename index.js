const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

//Middleware
app.use(morgan('dev'))

//Router
const Personrouter = require('./personsRoute');
app.use('/persons',Personrouter);


//local host
const PORT = process.env.PORT  || 4000
app.listen(PORT,() =>{
    console.log('port is on ${PORT}');
});
 
//DB server Creation
mongoose.connect(process.env.MYDB_CONNECTION,(err) =>{
    if(err){
        console.log('DB not connected')
    }
    console.log('DB connected Successfully')
})