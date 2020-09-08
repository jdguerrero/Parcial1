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


/**
 * punto 1 Crear un VideoJuego
 */

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

    
    res.send("Video Juego Creado");

    //res.redirect("/");
});

/**
 * Punto 2 . Eliminar por id
 * appServer.get("/delete/:id", (req,res) =>{
    

    let pos = videoJuegos.indexOf(req.params.id);

    videoJuegos.splice(pos, 1);

    res.redirect("/");
});
 */



/**
 * Mostrar Todos Los Video Juegos
 */

appServer.get("/mostrarVideoJuegos", (req,res) =>{

    

    res.send("Video Juegos en consola");

    videoJuegos.forEach(function(videoJuego){
       
        console.log("");
        console.log(videoJuego.id);
        console.log(videoJuego.titulo);
        console.log(videoJuego.estudio);
        console.log(videoJuego.añoLanzamiento);
        console.log(videoJuego.descripcion);
        console.log(videoJuego.edadMin);
        console.log("");
    });
    
});