const express = require("express");

const appServer = express();

const uuid = require("uuid");

appServer.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
});

let videoJuegos = [];

appServer.get('/',
    (req, res) => {
        res.send("HELLO WORLD DESDE INDEX!!!");
    }
);


appServer.post("/nuevoVideoJuego", (req,res) =>{
    
    const {titulo,estudio,añoLanzamiento,descripcion,edadMin} = req.body;

    if(!titulo || !estudio || !añoLanzamiento || !descripcion || !edadMin){
        res.status(400).send("Campos vacios")
    }
    let videoJuego = {
        //uuid 
        id: uuid.v4(),
        titulo,
        estudio,
        añoLanzamiento,
        descripcion,
        edadMin
    }
    
    videoJuegos.push(videoJuego);

    res.redirect("/");
});