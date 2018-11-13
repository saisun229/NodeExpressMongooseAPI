const express = require('express');
const path = require('path');
//Init App
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;
Employees = require('./models/employees');
Projects = require('./models/projects');
app.use(bodyParser.json());

const productRoutes =require('./api/routes/projects');
app.use('/api/projects', productRoutes);
const employeeRoutes =require('./api/routes/employees');
app.use('/api/employees', employeeRoutes);



app.use((req,res, next)=>{
res.header("Access-Control-Allow-Origin", "*");
res.header(

    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
);
if(req.method === 'OPTIONS'){

res.header('Access-Control-Allow-Methods', 'PUT', 'POST','GET', 'PATCH', 'DELETE')
return res.status(200).json({});
}
});

app.use((req, res, next)=>{
const error = new error('Not found');
error.status(404);
next(error);

});

app.use((error, req, res, next)=>{

    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});
    
    //Route
    app.get('/', (req, res)=>{
        res.send("please use /api/softworld");
    });
    
//start server
 app.listen(3000, function(){
    console.log('Server started on port 3000');
}); 
//module.exports = router;