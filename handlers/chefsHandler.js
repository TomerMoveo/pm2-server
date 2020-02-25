const allChefsModel = require('../models/chefs');

async function getAllChefs (cb) {
    try {
        const allChefsRes = await allChefsModel.find();
        cb(null ,allChefsRes);
    }
    catch (err) {
        cb(err);
    };
}
async function postAllChefs (req, cb) {
    const newChef = new allChefsModel({
        name: req.body.name,
        // restaurants: req.body.restaurants
    });
    try {
        const savedChef = await newChef.save()
        cb(null, savedChef);
    }
    catch (err) {
        cb(err);
    };
}

module.exports = {
    getAllChefs,
    postAllChefs
}