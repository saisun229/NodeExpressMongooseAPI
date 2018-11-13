var mongoose = require('mongoose');
var employeesSchema = mongoose.Schema({
//_id:mongoose.Schema.Types.ObjectId,
name: {
type:  String,
required: true
},
project:{
type: String,
required: false
},
create_date:{
type: Date,
default: Date.now

}
});

var Employees = module.exports = mongoose.model('Employees', employeesSchema);
//Get employees
module.exports.getEmployees = (callback,limit)=>{
    Employees.find(callback).limit(limit);
}

//enroll employees in project
module.exports.enrollEmployeesInProject = (employeeId, projectId, callback)=>{
    Employees.getEmployeeById(employeeID, callback).then((emp, callback)=>{
     emp.project = projectId;
     emp.save(callback);
    });

}


//get employee By id
module.exports.getEmployeeById = (id, callback)=>{
    Employees.findById(id, callback);

}

//Add employee.populate('project')
module.exports.addEmployee = (employees, callback)=>{
    Employees.create(employees, callback);
}
//update employee
module.exports.updateEmployee = (id, project ,options, callback)=>{
   var query = {_id:id};
   var update = {
name: project.name,
project: project.name

   }
   Employees.findOneAndUpdate(query, update,options, callback);

   } 
  
   module.exports.deleteEmployee = (id, callback)=>{
    var query = {_id:id};
    Employees.remove(query, callback);
}

