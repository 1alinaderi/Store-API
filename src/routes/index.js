const express = require('express')
const router = express.Router();
const authRouter = require("./auth")
const productRouter = require("./product")
const contactRouter = require('./contact')

router.use("/auth" , authRouter);
router.use("/product", productRouter);
router.use("/contact" , contactRouter)

module.exports = router