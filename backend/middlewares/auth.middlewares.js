const foodPartnerModel = require("../models/foodpartner.model");
const foodParterModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

const authFoodPartnerMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodPartnerModel.findById({ _id: decoded.id });
    req.foodPartner = foodPartner;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById({ _id: decoded.id });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
