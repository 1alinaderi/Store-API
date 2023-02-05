const express = require("express");
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");
const config = require("config");
const router = require("./src/routes")

const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use( "/public" ,  express.static('public'));
app.use("/uploads" , express.static("uploads"))

mongoose
    .connect(config.get("db.address"))
    .then(()=>console.log("conntect to mongodb"))
    .catch(()=>console.log("could not connect"))

app.use("/api" , router)

const port = process.env.PORT || 3000
app.listen(port , ()=>console.log(`listinig on port ${port}`))
