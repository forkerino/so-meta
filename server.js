'use strict';

const express = require('express');
const multer = require('multer');
const path = require('path');

let app = express();
let uploads = multer();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'form.html')); 
});

app.post('/size', uploads.single('uploadedfile'), function(req, res){
    res.end(JSON.stringify({size: req.file.size})); 
});

app.get('*', function(req, res){
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Listening...');
});