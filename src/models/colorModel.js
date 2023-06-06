const mongoose = require("mongoose"); // Erase if already required

// Declare o schema do modelo Mongo
let colorSchema = new mongoose.Schema(
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

//Export model
module.exports = mongoose.model("Color", colorSchema);
