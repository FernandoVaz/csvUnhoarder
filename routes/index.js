var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('/data para CSV em Json');
  });

module.exports = router;
