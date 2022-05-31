const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const fetchuser = require('../middleware/fetchuser');

dotenv.config({path : './.env'});


//Route 1 : Create a user using: POST "/api/auth/createuser" Doesn't require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    //if error found return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check whether email is unique
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email already exists😕" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Create a new User and insert in database
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        //Creating jwt auth_token via user.id
        const data = {
            user:{
                id: user.id
            }
        }
        const auth_token = jwt.sign(data, process.env.JWT_SECRET);
        // console.log(auth_token);

        res.json({auth_token});

    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server error', message: err.message })
    }

    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body)
})

//Route 2 : Authenticate a User using POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    // If there are errors, return Bad request and error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array });
    }

    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ error: "Incorrect Credentials" });
        }

        const passCompare = await bcrypt.compare(password, user.password);
        if(!passCompare){
            return res.status(400).json({ error: "Incorrect Credentials" });
        }

        const payload = {
            user:{
                id: user.id
            }
        }

        const auth_token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({auth_token});
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server error', message: err.message })
    }
} )

//Route 3 : Get loggedin User details using POST "/api/auth/getUser". login required
router.post('/getuser', fetchuser, async (req, res) => {

    try{
        const userId = req.user.id;
        let user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server error', message: err.message })
    }
} )


module.exports = router