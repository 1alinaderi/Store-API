const express = require("express")
const router = express.Router();
const sendMail = require("../../middlewares/senEmail")
const validator = require("./validator")
const controller = require("./controller")


router.post("/" , 
validator.sendEmailvalidator(),
controller.validate    
,sendMail)


module.exports = router 