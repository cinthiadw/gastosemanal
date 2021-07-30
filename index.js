const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());



// static files

app.use(express.static('public'));

// starting server

app.listen(3000, () => {
    console.log('Server on port 3000');
});