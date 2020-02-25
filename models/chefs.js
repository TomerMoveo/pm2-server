const mongoose = require('mongoose');

const ChefsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
});


module.exports = mongoose.model('Chefs', ChefsSchema);