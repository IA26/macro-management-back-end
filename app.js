const express = require('express');

const app = express(); 

//ROUTES

app.get('/', (req, res) => {
    res.send("Home pagsdde");
});






// LISTENING 
app.listen(8000);