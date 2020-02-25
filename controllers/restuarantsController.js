const restHandler = require('../handlers/restuarantsHandler');

function getRestuarants ( req, res, cb ) {
    restHandler.getAllRestuarants((err, allRest) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(allRest)
        }
    }); 
}
function getPopularRes ( req, res, cb ) {
    restHandler.getPopularRes((err, allPopular) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(allPopular)
        }
    }); 
}
function getResByChef ( req, res, cb ) {
    restHandler.getResuarantByChef((err, resByChef) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(resByChef)
        }
    }); 
}
function postRestuarants ( req, res, cb ) {
    restHandler.postAllRestuarants( req, (err, allRest) => {
        if (err) {
            res.json(err);
        }
        else {
            res.send({status: true});
        }
    });
}


module.exports = {
    getRestuarants,
    getPopularRes,
    getResByChef,
    postRestuarants,
}