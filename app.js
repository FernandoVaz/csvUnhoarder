var express = require('express');
var csv = require("csvtojson");

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');
//var listenRouter = require('./routes/port')
var app = express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

app.get('/data', function (req, res) {
    var jsonToReturn;  
    csv()
        .fromFile('./resources/teste.csv')
        .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            res.json(jsonArrayObj); 
        })
    //console.log(jsonToReturn);
    //res.send("Parse not possible");
});

//app.use('/data', dataRouter);
app.use('/', indexRouter);

//app.use(3000, listenRouter);