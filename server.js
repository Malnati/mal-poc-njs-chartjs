const express = require('express');
const path = require('path');
const chart = require('chart.js');

const app = express();
  
app.use("/public", express.static('./public/'));  

app.get('/', async (request, response) => {
    await response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', async (request, response) => {
  const data = {
    datasets: [{
            data: [10, 20, 30, 20],
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#cc65fe',
                '#ffce56'
            ]
        }],
    labels: [
            'Red',
            'Blue',
            'Purple',
            'Yellow'
        ]
    };
  let msg = JSON.stringify(data);
  response.status(200).send(msg);
  response.status(200).end();
});

app.listen(process.env.PORT || 3000, () => {
    console.info(`Server started on port: ${process.env.PORT || 3000}`);
});