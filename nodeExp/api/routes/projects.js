const express = require('express');
const router = express.Router();


/* 
router.get('/', (req, res)=>{
       
    Projects.getProjects((err, projects)=>{
        if(err){
            throw err;
        }
        res.json(projects);
    });
       
    });
 */

router.get('/', (req, res, next)=>{
       
    Projects.find()
.select('name employees _id status description create_date')
.populate('employees')
.exec()
.then(docs =>{
    res.status(200).json({
count:docs.length,
orders:docs.map(doc=>{
return{
_id:doc._id,
name:doc.name,
employees:doc.employees,
status:doc.status,
description:doc.description,
create_date:doc.create_date,
request:{
type: 'GET',
url:'http://localhost:3000/api/projects/'+doc._id
}
}
})
});
})
.catch(err=>{ 
    res.status(500).json({
        error:err
    });
});
});


router.get('/:projectId', (req, res, next)=>{
       const id = req.params.projectId;
    Projects.findById(id)
.select('name employees _id status description create_date')
.populate('employees')
.exec()
.then(doc =>{
    console.log("from database", doc);
    if(doc){

        res.status(200).json({
id:doc._id,
name:doc.name,
employees:doc.employees,
status:doc.status,
description:doc.description,
create_date:doc.create_date,
request:{
type: 'GET',
url:'http://localhost:3000/api/projects'
}
        });
    }

});
});










    router.delete('/:_id', (req, res)=>{
        var id = req.params._id;
         
         Projects.deleteProjects(id,   (err, projects)=>{
             if(err){
                 throw err;
             }
             res.json(projects);
         });
     });

router.post('/', (req, res)=>{
   
var project = req.body;
        Projects.addProject(project, (err, project)=>{
            if(err){
                throw err;
            }
            res.json(project);
        });
           
        });

        module.exports = router;
