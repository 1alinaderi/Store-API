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
        let storeValue = 0 ;
        let soldValue = 0 ;
        let itemSold = 0 ;
        let allitems = 0 ;
        (await this.Product.find()).map((e)=>{
            storeValue = storeValue + e.price ;
            allitems = allitems + 1 ;
        });
        (await this.Product.find()).map((e)=>{
            if(e.sold == true){
                soldValue = soldValue + e.price ;
                itemSold = itemSold + 1;
            }
        });
        data.storeValue = storeValue ;
        data.soldValue = soldValue;
        data.itemSold = itemSold;
        data.allitems = allitems
        this.response({
            res:res , data: data   , message:"successFull"
        })
    }
})