const express = require('express');
let router = express.Router();
const restuarantsController = require('../controllers/restuarantsController');

router
    .route('/')
    .get(restuarantsController.getPopularRes)

module.exports = router;