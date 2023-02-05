const config = require('config');
const jwt = require('jsonwebtoken');
const { AdminUser } = require("../models/admin");

async function isAdmin (req, res , next){
    const token = req.header("x-auth-token");
    if(!token)res.status(400).send("access denied");
    try{
        const decoded = jwt.verify(token , config.get("jwt_key"));
        const admin = await AdminUser.findById(decoded._id);
        req.admin = admin;
        next();
    }catch{
        res.status(400).send("invalid token");
    }
}

module.exports = isAdmin;