const { default: mongoose } = require("mongoose");
const controller = require("../controller");

module.exports = new (class extends controller {
    async getdataStore (req,res){
        (await this.Data.findByIdAndUpdate('63ef335249249bc87e6eece3' , {$inc : {view : 1}} )).save();
        const data = await this.Data.findById("63ef335249249bc87e6eece3")
        this.response({
            res:res , data:data , message:"successFull"
        })
    }
    async getdataPanel (req,res){
        const data = await this.Data.findById("63ef335249249bc87e6eece3")
        this.response({
            res:res , data:data , message:"successFull"
        })
    }
})