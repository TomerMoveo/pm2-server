const mealsHandler = require('../handlers/mealsHandler');

// # Get all meals
function getMeals ( req, res, cb ) {
    mealsHandler.getAllMeals((err, allmeals) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(allmeals)
        }
    }); 
}
// # Get only signature meals
function getSigMeals ( req, res, cb ) {
    mealsHandler.getSignatureMeals((err, sigMeals) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(sigMeals)
        }
    }); 
}
function postMeals( req, res, cb ) {
    mealsHandler.postAllMeals( req, (err, allmeals) => {
        if (err) {
            res.json(err);
        }
        else {
            res.send({status: true});
        }
    });
}


module.exports = {
    getMeals,
    getSigMeals,
    postMeals,
}