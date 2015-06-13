

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/devicelist', function(req, res, next) {
    var db = req.db;
    var collection = db.get('devices');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/addevice', function(req, res) {
    var db = req.db;
    var collection = db.get('devices');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
