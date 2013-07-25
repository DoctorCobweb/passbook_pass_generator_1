var express = require('express');
var wine = require('./routes/wines.js');
var pass = require('./routes/pass');
var app = express();

//the name of the resulting pass file 
var pass_name = 'freehugcoupon.pkpass';

//create the sha1 hashes of *.png and package.json files
var manifest_content = {}; 

var port_number = process.env.PORT ||
    3000;


app.use(express.logger('dev')); 
app.use(express.bodyParser());


app.get('/pass', pass.generate_pass);
app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
app.get('*', pass.hello_world); //for all other route requests.


app.listen(port_number);
console.log('process.env.PORT = ' + process.env.PORT);
//console.log('process.config= ' + JSON.stringify(process.config));
console.log('Server running on port ' + port_number);

