const controller = require("../controller")

module.exports = new (class extends controller {
    async create(req,res){
        const product = new this.Product({
            name: req.body.name,
            desc: req.body.desc,
            price : req.body.price,
            sold : req.body.sold
        })
        if (req.file){
            product.image = req.file.path
        }
        product.id =  Date.now() * product.name.length 
        product.save()
        .then(()=>{
            this.response({
                res,message:"successfuly create product"
            })
        })
        .catch(()=>{
            this.response({
                res,message:"failed to create check the field you sent"
            })
        })
    }

    async update(req,res){
        if(req.query.id){
            const productexist = await this.Product.findOne({id : req.query.id})
            if(productexist == null){
                this.response({
                    res , message:'wrong id' , code:404
                })
            }else{
                if(!req.body.name && !req.body.desc && !req.file){
                    this.response({
                       res , message:"you put nothing" , code:400
                    })   
                }else{
                    let product;
                    if(req.body.name){
                        product = await this.Product.findOneAndUpdate({id : req.query.id},{name : req.body.name})
 
                    }
                    if(req.body.desc){
                        product = await this.Product.findOneAndUpdate({id : req.query.id},{desc : req.body.desc})
                    }
                    if (req.file){
                     product = await this.Product.findOneAndUpdate({id : req.query.id} , {image : req.file.path})
                    }
                    product.save()
                 this.response({
                     res , message:"succesfully updated" 
                 })
                }   
            }
        }else{
            this.response({
                res , message:"you must put id in query" , code:400
            })
        }
    }

    async deleteproduct(req,res){
        if(req.query.name){
            const product = await this.Product.deleteOne({name : req.query.name})
            this.response({
                res , message : "successful deleted" , data : {product}
              })
        }else if (req.query.id){
            const product = await this.Product.deleteOne({id : req.query.id})
            this.response({
                res , message : "successful deleted" , data : {product} 
              })
        }else{
            const allProduct = await this.Product.deleteMany()
            this.response({
              res , message : "successful deleted" , data : {allProduct} 
            })
        }
    }

    async getall(req,res){
        const ProductCount = (await this.Product.find()).length 
        if(req.query.name){
            const product = await this.Product.find({name : req.query.name})
            this.response({
                res , message : "successful" , data : {product , ProductCount} 
              })
        }else if(req.query.id){
            const product = await this.Product.find({id : req.query.id})
            this.response({
                res , message : "successful" , data : {product , ProductCount} 
              })
        }else{
            const allProduct = await this.Product.find()
            this.response({
              res , message : "successful" , data : {allProduct , ProductCount} 
            })
        }
    }

})