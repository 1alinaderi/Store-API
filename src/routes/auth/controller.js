const controller = require("../controller");
const config = require("config");
const jwt = require("jsonwebtoken");


module.exports = new (class extends controller {
    async login(req, res){
        console.log(req)
        const admin = await this.AdminUser.findOne({ email : req.body.email })
        if (!admin){
            return this.response({
                res , code : 400 , message : "invalid email or password"
            });
        }
        const inValid = await this.AdminUser.findOne({password : req.body.password })
        if (!inValid){
            return this.response({
                res , code : 400 , message : "invalid email or password"
            });
        }
        const token = jwt.sign({_id:admin.id} , config.get("jwt_key"))
        this.response({
            res, message:"successfuly logged in",data:{token}
        })
    }
})