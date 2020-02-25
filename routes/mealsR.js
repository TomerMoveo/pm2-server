const express = require('express');
let router = express.Router();
const mealsController = require('../controllers/mealsController');

router
    .route('/')
    .get(mealsController.getMeals)
    .post(mealsController.postMeals);

module.exports = router;