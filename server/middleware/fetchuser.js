const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config({path : './.env'});

const fetchuser = (req, res, next) => {
    //Get user details from the jwt-token and add id to req object(body)
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({ error: "please authenticate using a valid token" });
    }

    try{
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch(err){
        res.status(401).send({ error: "please authenticate using a valid token" });
    }
    
    
}

module.exports = fetchuser;