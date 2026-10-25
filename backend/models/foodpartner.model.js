const mongoose = require("mongoose");

const foodPartnerScehma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const foodPartnerModel = mongoose.model("foodPartner", foodPartnerScehma);

module.exports = foodPartnerModel;
