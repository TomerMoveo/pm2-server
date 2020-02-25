const chefsHandler = require('../handlers/chefsHandler');

function getChefs ( req, res, next ) {
    chefsHandler.getAllChefs((err, allchefs) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(allchefs)
        }
    }); 
}
function postChefs ( req, res, cb ) {
    chefsHandler.postAllChefs( req, (err, allchefs) => {
        if (err) {
            res.json(err);
        }
        else {
            res.send({status: true});
        }
    });
}

module.exports = {
    getChefs,
    postChefs
}