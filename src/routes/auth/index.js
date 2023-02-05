const express = require("express")
const router = express.Router();
const constroller = require("./controller")
const validator = require("./validator")

router.post("/login" , 
    validator.loginvalidator(),
    constroller.validate,
    constroller.login,
);
module.exports = router