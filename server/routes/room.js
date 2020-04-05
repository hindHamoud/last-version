

const express = require('express');
const router = express.Router();
const { Room } = require("../models/Room");



router.post("/createRoom", (req, res) => {

    const room = new Room(req.body);

    room.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});
