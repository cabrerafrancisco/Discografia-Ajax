const express = require('express');
const path = require("path");
const app = express();
const PORT = 3001;
const jsonDiscos = require("./discos.json");
const index = path.join(__dirname , "clien/index.html")

app.use(express.static(path.join(__dirname, "client")));

app.get('/' , (req , res) => {
    res.sendFile(index)
})

app.get('/discos', function(req, res) {
    let results = jsonDiscos.discos
    const { artist, title, launch } = req.query

    if (title) {
        results = results.filter((element) => element.titulo.toLowerCase().includes(title.toLowerCase()))
    }
    if (artist) {
        results = results.filter((element) => element.artista.toLowerCase().includes(artist.toString().toLocaleLowerCase()));
    }
    if (launch) {
        results = results.filter((element) => element.lanzamiento.toString() == launch);
    }

    console.log(title);
    console.log(artist);
    console.log(launch);

    console.log(results);

    res.json(results);
});

// GET QUE retorna hace consulta en el archivo discos.json

app.listen(PORT , () => {
    console.log(`Usando el puerto: ${PORT}`);
})
