const axios = require('axios');

const test = require('./service.test');

//Test get sem token
axios.get('http://localhost:3000').then(data => {
    console.log(data.data);
    if (data.data == test.saida_get.data) console.log("\nTeste 1 - Ok!\n");
    else console.log("\nTeste 1 - Falha!\n");
}).catch(err => console.log(err.response.data));

//Test Post sem Token
axios.post('http://localhost:3000/v1/sender', test.entrada).then(data => {
    console.log(data.data);
    if (data.data == test.saida.data) console.log("\nTeste 2 - Ok!\n");
    else console.log("\nTeste 2 - Falha!\n");
}).catch(err => console.log(err.response.data));

//Test get com token
axios.get('http://localhost:3000?token=' + test.entrada_get_token).then(data => {
    console.log(data.data);
    if (data.data == test.saida_get_token.data) console.log("\nTeste 3 - Ok!\n");
    else console.log("\nTeste 3 - Falha!\n");
}).catch(err => console.log(err.response.data));

//Test post com token
axios.post('http://localhost:3000/v1/sender?token=' + test.entrada_get_token, test.entrada_token).then(data => {
    console.log(data.data);
    if (data.data == test.saida_token.data) console.log("\nTeste 4 - Ok!\n");
    else console.log("\nTeste 4 - Falha!\n");
}).catch(err => console.log(err.response.data));