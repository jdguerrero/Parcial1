const express = require("express");

const appServer = express();

const uuid = require("uuid");

appServer.use(express.json());

//const videoJuego = require ('./videoJuego');


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

   
   const {titulo,estudio,añoLanzamiento,descripcion,edadMin } = req.body;

    let videoJuego = {
        //uuid 
        id: uuid.v4(),
        titulo,
        estudio,
        añoLanzamiento,
        descripcion ,
        edadMin
    }

    
    videoJuegos.push(videoJuego);

    videoJuegos.forEach(function(videoJuego){
        console.log(videoJuego.id);
        console.log(videoJuego.titulo);
        console.log(videoJuego.estudio);
        console.log(videoJuego.añoLanzamiento);
        console.log(videoJuego.descripcion);
        console.log(videoJuego.edadMin);
    });


    
    res.send("POST USER ADDED");

    res.redirect("/");
});