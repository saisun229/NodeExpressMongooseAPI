const express = require('express');
const router = express.Router();






router.get('/:_id', (req, res)=>{
       
    Employees.getEmployeeById(req.params._id, (err, employees)=>{
        if(err){
            throw err;
        }
        res.json(employees);
    });
});

router.get('/', (req, res)=>{
   
    Employees.getEmployees((err, employees)=>{
        if(err){
            throw err;
        }
        res.json(employees);
    });
});

router.get('/project', (req, res, next)=>{
   
    Employees.enrollEmployeesInProject(err)

});
router.post('/', (req, res)=>{
   
    var employee = req.body;
    Employees.addEmployee(employee, (err, employee)=>{
        if(err){
            throw err;
        }
        res.json(employee);
    });
});

router.put('/:_id', (req, res)=>{
   var id = req.params._id;
    var employee = req.body;
    Employees.updateEmployee(id, employee, {},  (err, employee)=>{
        if(err){
            throw err;
        }
        res.json(employee);
    });
});

router.delete('/:_id', (req, res)=>{
    var id = req.params._id;
     
     Employees.deleteEmployee(id,   (err, employee)=>{
         if(err){
             throw err;
         }
         res.json(employee);
     });
 });

 module.exports = router;