const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true}
})

const productSchema = new mongoose.Schema({
    name:{type : String , required : true},
    desc:{type : String , required : true},
    image : { type : String , required : true },
    id : {type:Number }
}) 

const Product = mongoose.model("Product" , productSchema);
const AdminUser = mongoose.model("Admin" , adminSchema);
module.exports = {AdminUser , Product};