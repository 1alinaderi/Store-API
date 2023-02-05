const express = require("express");
const router = express.Router();
const controller = require("./controller")
const upload = require("../../middlewares/upload")
const isAdmin = require("../../middlewares/auth")


router.post("/create" ,
    isAdmin,
    controller.validate,
    upload.single("image"),
    controller.create
)

router.get('/' , controller.getall)

router.delete("/" , 
    isAdmin,
    controller.deleteproduct
)

router.put("/update",
 isAdmin, 
 controller.validate,
 upload.single("image"),
 controller.update 
 ) 


module.exports = router