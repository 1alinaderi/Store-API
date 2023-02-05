const config = require("config")
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: config.get("dealerInfo.email"),
        pass: config.get("dealerInfo.password")
    }
})

async function sendMail(req,res,next){
    const mailOption = {   
        from : req.body.email,
        to : config.get("dealerInfo.email"),
        subject:"Contact Us",
        html: 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta    http-equiv="X-UA-Compatible" content="IE=edge">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Customer Information</h1>
            <p><strong>name : </strong>${req.body.name}</p>
            <p><strong>email : </strong>${req.body.email}</p>
            <p><strong>phone : </strong>${req.body.phone}</p>
            <p><strong>comment :</strong></p>
            <p>${req.body.comment}</p>
        </body>
        </html>`
    }
    transport.sendMail(mailOption , (err , data)=>{
        try {
            console.log("successfuly send")
            res.send("successfuly email send")
            next()
        } catch (error) {
            console.log("error for email :" , err)
            res.status(400).send("email not sendd")
        }
    })
    
}

module.exports = sendMail