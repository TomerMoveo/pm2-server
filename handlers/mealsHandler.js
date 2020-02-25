const mealsModel = require("../models/meals");

// # Get all meals
async function getAllMeals(cb) {
  try {
    const allMeals = await mealsModel.find(); //findOne {signature == true}
    cb(null, allMeals);
  } catch (err) {
    cb(err);
  }
}
// # Get only signature meals
async function getSignatureMeals(req) {
  try {
    const sigMeals = await mealsModel.find({ signature: true });
    req(null, sigMeals);
  } catch (err) {
   throw err;
  }
}

async function postAllMeals(req, cb) {
  const newMeal = new mealsModel({
    signature: req.body.signature,
    image: req.body.image,
    dishName: req.body.dishName,
    description: req.body.description,
    dishType: req.body.dishType,
    price: req.body.price
  });
  try {
    const savedMeal = await newMeal.save();
    cb(null, savedMeal);
  } catch (err) {
    cb(err);
  }
}

module.exports = {
  getAllMeals,
  getSignatureMeals,
  postAllMeals
};
