const mongoose = require("mongoose");

// Declare o schema do modelo Mongo
let brandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export Model
module.exports = mongoose.model("Brand", brandSchema);
