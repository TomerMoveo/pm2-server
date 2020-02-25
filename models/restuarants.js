const mongoose = require('mongoose');

const RestuarantsSchema = mongoose.Schema({
        popular: {
            type: Boolean,
            require: true
        },
        image : {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        chefID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chefs'
        },
        meals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Meals'
        }]
});

module.exports = mongoose.model('Restaurants', RestuarantsSchema);