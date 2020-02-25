const mongoose = require('mongoose');

const MealsSchema = mongoose.Schema({
    signature: {
        type: Boolean,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    dishName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    dishType: {
        type: String,
    },
    price: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Meals', MealsSchema);