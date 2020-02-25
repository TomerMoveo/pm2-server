const express = require('express');
let router = express.Router();
const mealsController = require('../controllers/mealsController');

router
    .route('/')
    .get(mealsController.getSigMeals)

module.exports = router;