const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('got request');
    res.send('Harel');
});

app.listen(8084);
console.log('app is running');