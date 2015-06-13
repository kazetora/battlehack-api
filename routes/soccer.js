
var express = require('express');
var router = express.Router();
var mypusher = require('../lib/pusher/mypusher');

/* GET users listing. */
router.get('/getStat', function(req, res, next) {
    var result = { score: 75 };
    res.json(result);
});

router.post('/start', function(req, res) {
    mypusher.trigger('training', 'start', {});
    res.send("OK");
});

router.post('/stop', function(req, res) {
    var result = { score: 100 };
    mypusher.trigger('training', 'stop', {});
    res.json(result);
});

module.exports = router;
