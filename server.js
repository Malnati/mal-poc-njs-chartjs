const express = require('express');
const path = require('path');
const chart = require('chart.js');

const app = express();
  
app.use("/public", express.static('./public/'));  

app.get('/', async (request, response) => {
    await response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.info(`Server started on port: ${process.env.PORT || 3000}`);
});