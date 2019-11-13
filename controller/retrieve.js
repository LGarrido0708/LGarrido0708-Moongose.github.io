const shop = require('../models/shop.js');
var mongoose = require('mongoose');


// Fetch all Users
exports.findAll = (res) => {
    var res = res;
    shop.find({}, function (err, items) {
        if (err) {
            res.json(err);
        } else {
            res.json({ results: items });
            // res.end("all")
        }
    });

};
exports.findId = (res, id) => {
    shop.findById(id, (err, doc) => {
        console.log(doc)
        if (err) {
            res.end(doc);
        } else {
            res.json({ results: doc });
        }
    });
}