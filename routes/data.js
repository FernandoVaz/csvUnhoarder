var express = require('express');
var router = express.Router();
var csv = require("csvtojson");
const fs = require('fs');

router.get('/data', function (req, res) {  
    const jsonArray = csv().fromFile('./resources/a.csv');
    res.send(jsonArray);
  });

module.exports = router;
