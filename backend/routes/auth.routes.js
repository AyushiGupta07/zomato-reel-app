const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  loginFoodPartner,
  logoutFoodPartner,
  registerFoodPartner,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser);

router.post("/food-partner/register", registerFoodPartner);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner /logout", logoutFoodPartner);

module.exports = router;
