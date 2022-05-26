const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body)
})

//Create a user using: POST "/api/auth"
//Doesn't require auth



module.exports = router