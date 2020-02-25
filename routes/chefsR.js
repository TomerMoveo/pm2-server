const express = require('express');
let router = express.Router();
const chefsController = require('../controllers/chefsController');

router
    .route('/')
    .get(chefsController.getChefs)
    .post(chefsController.postChefs);

module.exports = router;


// ## Get popular restaurants by ID ## //

// router.route('/popular/:id')
// .get((req , res) => {
//     const pRestaurant = popularRestaurants.find(r => r.id === parseInt(req.param.id));
//     if (!pRestaurant) res.status(404).send('The Restaurant ID was not found');
//     res.send(pRestaurant);
// });