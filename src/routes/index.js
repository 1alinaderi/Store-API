const express = require('express')
const router = express.Router();
const authRouter = require("./auth")
const productRouter = require("./product")
const contactRouter = require('./contact')
const dataRouter = require("./data")

router.use("/auth" , authRouter);
router.use("/product", productRouter);
router.use("/contact" , contactRouter);
router.use("/data" , dataRouter);

module.exports = router