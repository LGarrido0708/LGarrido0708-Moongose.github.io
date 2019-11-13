const shop = require('../models/shop.js');
var mongoose = require('mongoose');


exports.delete = (id, res) => {
    shop.findByIdAndRemove(id, (err, doc) => {
        if (err) {
            res.end("" + doc)
        } else {
            res.end("" + doc)
            console.log('deleted')
        }
    });
}