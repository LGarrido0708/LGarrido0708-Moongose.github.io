const shop = require('../models/shop.js');
var mongoose = require('mongoose');


exports.update = (id, res) => {
    shop.findByIdAndUpdate(id, (err, doc) => {
        if (err) {
            res.end("0")
        } else {
            res.json(doc)
            console.log(doc)
        }
    });

    shop.findOneAndUpdate({ name: 'Yoda' }, { $set: { name: req.body.name, quote: req.body.quote } }, { sort: { _id: -1 }, upsert: true },
    (err, result) => { 
        if (err) return res.send(err)
            res.send(result) 
         })

}