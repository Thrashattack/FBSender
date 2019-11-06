const port = 80;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');

const app = express();

app.use(cors());
app.use(bodyParser.json());

consign()
    .include('./src/service/')
    .then('./src/controller/')
    .then('./src/config/')
    .into(app);

app.listen(port, () => {
    console.log("[SERVICE] Facebook Message Send API is up. localhost:" + port);
});

