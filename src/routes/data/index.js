const express = require('express')
const router = express.Router();
const controller = require("./controller")

router.get("/store" , controller.getdataStore )

router.get("/panel" , controller.getdataPanel )

module.exports = router