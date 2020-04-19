const express = require('express');
const router = express.Router();
const { Plan} = require("../models/plan");
const { auth } = require("../middleware/auth");
router.route('/').get((req,res)=>{
    Plan.find()
    .then(plan=>res.json(plan))
    .catch(err=>res.status(400).json('Error= '+err)); });

        router.get("/auth", auth, (req, res) => {
            var query = { admin:req.user._id };
            Plan.findOne(query)
            .then(plan=>res.json(plan))
    .catch(err=>res.status(400).json('Error= '+err)); });
        
    router.route("/add").post((req, res) => {
        const today= new Date()
        const admin= req.body.admin;
        const created=today;
        const fireIncident=req.body.fireIncident;
        const electricityIncident=req.body.electricityIncident;
        const attackIncident=req.body.attackIncident;
        const internalContact=req.body.internalContact;
        const externalContact=req.body.externalContact;
        const human=req.body.human;
        const equipmemt=req.body.equipmemt;
        const team=req.body.team;
        const system=req.body.system;
       

         const newPlan= new Plan({
            admin,
            created,
            fireIncident,
            electricityIncident,
            attackIncident,
            internalContact,
            externalContact,
            team,
            human,
            equipmemt,
            system, })
    
        newPlan.save()
            .then(()=>res.json('Plan add'))
            .catch((err=>res.status(400).json('Error= '+err)))});
        
    module.exports = router;