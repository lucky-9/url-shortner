const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const mongoURI = config.get("DB");
const urlRoutes = require('./routes/url');
const cors = require("cors");
const bodyparser = require("body-parser");


const app = express();
const PORT = 3000;



//MiddleWares
app.use(bodyparser.json());
app.use(cors());


app.use('/api', urlRoutes);

//connectig to mongoDB
const connectDB = async ()=>{
    try{
        await mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser:true });
        console.log("connected to DB ");
    }
    catch(ex){
        console.log("error connecting to DB ", ex);
        process.exit(1);
    }
}

connectDB();


//server
app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);
});

