const express = require('express');

const path = require('path');

const port = process.env.PORT || 3300;

const app = express();

const publicPath = path.join (__dirname ,'./public');

app.use ( express.static (publicPath));

app.listen( port , ()=> {
    console.log ('Servidor corriendo en el puerto 3300');
});
app.get ("/" , (req , res ) =>{
       res.sendFile( path.resolve ('./view/home.html'))
})
