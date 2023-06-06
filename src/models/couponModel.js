const mongoose = require("mongoose"); // Erase if already required

// Declare o schema do modelo Mongo
let couponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

//Exporte o model
module.exports = mongoose.model("Coupon", couponSchema);
