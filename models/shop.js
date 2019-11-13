const mongoose = require('mongoose')

var shoppingSchema = new mongoose.Schema({

    title: {
        type: String
    },

    description: {
        type: String,
    },
    content: {
        type: String
    }

});

module.exports = mongoose.model('Shop', shoppingSchema);