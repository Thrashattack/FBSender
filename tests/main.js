const axios = require('axios');

const test = require('./service.test');

//Test get sem token
axios.get('http://localhost:3000').then(data => {
    console.log(data);
}).catch(err => console.log(err));

//Test Post sem Token
axios.post('http://localhost:3000', test.entrada).then(data => {
    console.log(data);
}).catch(err => console.log(err));

//Test get com token
axios.get('http://localhost:3000'.test.entrada_get_token).then(data => {
    console.log(data);
}).catch(err => console.log(err));

//Test post com token
axios.post('http://localhost:3000', test.entrada_token).then(data => {
    console.log(data);
}).catch(err => console.log(err));