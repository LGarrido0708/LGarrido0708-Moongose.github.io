const shop = require('../models/shop.js');
var mongoose = require('mongoose');


exports.update = (id, content, res) => {
    shop.findById(id, (err, doc) => {
        console.log(doc)
        doc.content = content

        doc.save((err) => {
            if (err) throw err;
            // console.log(doc);
            console.log(doc)
            res.send('Post is successfully updated!')
        });
    })
    // shop.findOneAndUpdate({ name: 'Yoda' }, { $set: { name: req.body.name, quote: req.body.quote } }, { sort: { _id: -1 }, upsert: true },
    // (err, result) => { 
    //     if (err) return res.send(err)
    //         res.send(result) 
    //      })

}