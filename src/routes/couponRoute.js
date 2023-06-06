const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware,  createCoupon);
router.get("/", authMiddleware,  getAllCoupons);
router.get("/:id", authMiddleware,  getCoupon);
router.put("/:id", authMiddleware,  updateCoupon);
router.delete("/:id", authMiddleware,  deleteCoupon);

module.exports = router;
