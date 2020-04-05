const express = require('express');
const router = express.Router();
const { Support } = require("../models/support");

router.route('/').get((req,res)=>{
    Support.find()
    .then(support=>res.json(support))
    .catch(err=>res.status(400).json('Error: '+err));
    });

    router.post("/send", (req, res) => {
        const type =req.body.type;
        const  email=req.body.email;
        const problem=req.body.problem;
        

        const newSupport = new Support({
            type,
            email,
            problem,
        })
    
        newSupport .save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true
            });
        });
    });
    module.exports = router;