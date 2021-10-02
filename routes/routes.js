const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const joi = require("joi");
const router = express.Router();
const {meet,validatemeet}=require('../Meeting/meeting');



router.post('/createclass',async (req, res) => {
    const { error } = validatemeet(req.body);
    if (error) return res.status(400).send(error.message);
    console.log("jii");

    let m1 = new meet({ URL: req.body.URL,Id:req.body.ID , startTime: req.body.startTime,class:req.body.class});
    p1 = await m1.save();

    res.send(p1);
});

router.delete('/delete/', async (req, res) => {

    const m1 = await meet.findByIdAndRemove(req.body.id);

    if (!m1) return res.status(404).send('The product with the given ID was not found.');

    res.send(m1+"Deleted").status(200);
});
router.get('/getlink/', async (req, res) => {
    const m1 = await meet.find({class:req.body.class}).sort("startTime");

    res.send(m1[1]._id);
});


module.exports = router;