const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")

const adminSchema = new mongoose.Schema({
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true}
})

const productSchema = new mongoose.Schema({
    name:{type : String , required : true},
    desc:{type : String , required : true},
    image : { type : String , required : true },
    id : {type:Number },
    price : {type : Number , required : true },
    sold : {type : Boolean , default : false }
}) 
productSchema.plugin(timestamp)

const DataSchema = new mongoose.Schema({
    view : {type : Number} ,
    storeValue : {type : Number },
    soldValue : {type : Number},
    itemSold : {type:Number} ,
    allitems : { type : Number }
})

const Data = mongoose.model("Data" , DataSchema);
const Product = mongoose.model("Product" , productSchema);
const AdminUser = mongoose.model("Admin" , adminSchema);

module.exports = {AdminUser , Product , Data};