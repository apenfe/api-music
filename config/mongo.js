const mongoose = require("mongoose");

const dbConnect = async () => {

    const DB_URI = process.env.DB_URI;

    try{
        await mongoose.connect(DB_URI);
        console.log("Conexion correcta");
    }catch(err){
        console.log("ERROR de Conexion: "+err);
    }
      
};

module.exports = dbConnect;