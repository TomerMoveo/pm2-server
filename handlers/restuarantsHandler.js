const allRestuarantsModel = require('../models/restuarants');

// # Get all restuarants
async function getAllRestuarants (cb) {
    try {
        const allRes = await allRestuarantsModel.find(); //findOne {signature == true}
        cb(null ,allRes);
    }
    catch (err) {
        cb(err);
    };
}
// # Get only popular restuarants
async function getPopularRes (req, cb) {
    try {
        const popRes = await allRestuarantsModel.find({popular: true});
        req(null ,popRes);
    }
    catch (err) {
        cb(err);
    };
}
// # Get restuarants by chef
async function getResuarantByChef (req, cb) {
    try {
        const chefRes = await allRestuarantsModel.find({chefID: "5e4ea02f2fc3713b26aabc37"});
        req(null ,chefRes);
    }
    catch (err) {
        req(err);
    };
}
// # Post new restuarant
async function postAllRestuarants (req, cb) {
    const newRest = new allRestuarantsModel({
        popular: req.body.popular,
        image: req.body.image,
        title: req.body.title,
        chefID: req.body.chefID,
        meals: req.body.meals
    });
    try {
        const savedRes = await newRest.save()
        cb(null, savedRes);
    }
    catch (err) {
        cb(err);
    };
}



module.exports = {
    getAllRestuarants,
    getPopularRes,
    getResuarantByChef,
    postAllRestuarants,
}