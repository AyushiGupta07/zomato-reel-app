const foodModel = require("../models/food.model");
const { uploadFile } = require("../services/storage.services.js");
const { v4: uuid } = require("uuid");

const createFood = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileUploadResult = await uploadFile(req.file.buffer, uuid());
  console.log(fileUploadResult);

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });
  return res.status(201).json({
    message: "Food video uploaded",
    foodItem: {
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner._id,
    },
  });
};

const getFoodItems = async (req, res) => {
  const foodItems = await foodModel.find({});
  return res.status(200).json({
    message: "Food Items fetched successfully",
    foodItems: foodItems,
  });
};

module.exports = { createFood, getFoodItems };
