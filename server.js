const express = require('express');
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "client")));

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , "clien/index.html"))
})

app.listen(PORT , () => {
    console.log(`server iniciado en el puerto ${PORT} . . .`);
})