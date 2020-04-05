const express = require('express');
const router = express.Router();
const { Incident} = require("../models/incident");

router.route('/').get((req,res)=>{
    Incident.find()
    .then(incident=>res.json(incident))
    .catch(err=>res.status(400).json('Error= '+err));
    });

    router.route("/add").post((req, res) => {
        const today= new Date()
        const admin= req.body.admin;
        const incidentDate= req.body.incidentDate;
        const incidentName=req.body.incidentName;
        const created=today;
        const incidentCriticality=req.body.incidentCriticality;
        const name=req.body.name;
        const address=req.body.address;
        const mobile=req.body.mobile;
        const email=req.body.email;
        const departmentAffected=req.body.departmentAffected;
        const incidentDescription=req.body.incidentDescription;
        const resolutionDiscretion=req.body.resolutionDiscretion;
        const recommendation=req.body.recommendation;

         const newIncident= new Incident({
            admin,
            incidentDate,
            incidentName,
            created,
            incidentCriticality,
            name,
            address,
            mobile,
            email,
            departmentAffected,
            incidentDescription,
            resolutionDiscretion,
            recommendation,
            
        })
    
        newIncident.save()
            .then(()=>res.json('Incident add'))
            .catch((err=>res.status(400).json('Error= '+err)))
            });
        

    module.exports = router;