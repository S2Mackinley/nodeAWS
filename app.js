'use strict';

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the homepage from github actions');
})

app.listen(PORT, () => {
    console.log(`wow you started the app on ${PORT}`)
});