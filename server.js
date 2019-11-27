var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// https://medium.com/@aofleejay/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-express-101-ee37cc4952b4
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function () {
    var host = server.address().address ;
    var port = server.address().port ;
    console.log("Example app listening at http://%s:%s", host, port) ;
    });

var dataBook;
app.post('/bookflight' , function (req ,res){
    dataBook = req.body;
    res.send(req.body);   

});
app.get('/bookflight', function(req, res) {
    res.send(dataBook);
});

app.get('/flight', function (req, res) {
    fs.readFile( __dirname +'/public/json/' + "dataFlight.json", 'utf8', function (err, data) {     
        flight = data;   
        res.send(flight);
    });

});