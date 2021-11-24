const express = require('express');
const server = require('./app');
const app = server(express());
require('./database/db');
// function to activate server
//async function server(){
// await  //Starting server from here

app.listen(app.get('port'));
console.log('Server listening on--->', app.get('port'));

// }
// server()
