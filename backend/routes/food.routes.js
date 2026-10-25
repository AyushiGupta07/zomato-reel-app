const express = require("express");
const multer = require("multer");
const {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} = require("../middlewares/auth.middlewares");
const { createFood, getFoodItems } = require("../controllers/food.controller");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFood);

router.get("/", authUserMiddleware,getFoodItems);

module.exports = router;
