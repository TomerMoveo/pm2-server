const express = require('express');
let router = express.Router();
const restuarantsController = require('../controllers/restuarantsController');
const checkAuth = require('../middleware/check-auto');


router
    .route('/')
    .get(restuarantsController.getRestuarants)
    .post(checkAuth.authenticationToken,restuarantsController.postRestuarants);

module.exports = router;