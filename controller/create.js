const shop = require('../models/shop.js');
var mongoose = require('mongoose');


// Save FormData - User to MongoDB
exports.save = (req, res) => {
    var Shop = mongoose.model('Shop', shop.shoppingSchema, 'shops');
    const shops = new Shop(req);
    shops.save()
        .then(data => {
            console.log(data)
            res.send(data);
        }).catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message
            });
        });
};