var mongoose = require('mongoose');
var projectsSchema = mongoose.Schema({
//_id: mongoose.Schema.Types.ObjectId,
name: {
type:  String,
required: true
},
employees:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Employees',
    required: true
},
description:{
type: String,
default:"this is a project",
required: true
},
status:{
    type:String,
    default:"active",
    required:true
},
create_date:{
    type: Date,
    default: Date.now
    
    }
});

var Projects = module.exports = mongoose.model('Projects', projectsSchema);
//Get employees
module.exports.getProjects = (callback,limit)=>{
    Projects.find(callback).limit(limit);
}

module.exports.addProject = (project,callback)=>{
    Projects.create(project, callback);
}
 
module.exports.deleteProjects = (id, callback)=>{
    var query = {_id:id};
    Projects.remove(query, callback);
}
