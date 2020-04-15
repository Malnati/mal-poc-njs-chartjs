const express = require('express');
const path = require('path');
const chart = require('chart.js');

const app = express();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
    }
  };
  
app.use("/public", express.static('./public/'));  

app.get('/', async (request, response) => {
    await response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/doughnut', async (request, response) => {
    await response.sendFile(path.join(__dirname + '/doughnut.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.info(`Server started on port: ${process.env.PORT || 3000}`);
});