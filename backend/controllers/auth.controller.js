const userModel = require("../models/user.models.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model.js");

const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const isUserAlreadyExist = await userModel.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
  return res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User does not exist, Please register",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const token = await jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  return res.status(200).json({
    message: "User loggedIn successfully",
    user: {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "User logout successfully",
  });
};

const registerFoodPartner = async (req, res) => {
  const { name, email, password } = req.body;
  const isFoodPartnerAlreadyExist = await foodPartnerModel.findOne({ email });
  if (isFoodPartnerAlreadyExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
  return res.status(201).json({
    message: "Food Partner registered successfully",
    foodPartner: {
      _id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
    },
  });
};

const loginFoodPartner = async (req, res) => {
  const { email, password } = req.body;
  const foodPartner = await foodPartnerModel.findOne({ email });
  if (!foodPartner) {
    return res.status(400).json({
      message: "Food Partner does not exist, Please register",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const token = await jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);

  return res.status(200).json({
    message: "FoodPartner loggedIn successfully",
    foodPartner: {
      id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
    },
  });
};

const logoutFoodPartner = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Food Partner logout successfully",
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
