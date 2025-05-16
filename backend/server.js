import express from "express";
import { PORT } from "./config.js"

const app = express();

app.get('/:id', (req, res) => { 
    console.log(req.params.id);
    res.send('Algun texto')});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


