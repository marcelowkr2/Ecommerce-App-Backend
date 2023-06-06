const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
} = require("../controller/brandCtrl");
const { authMiddleware} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createBrand);
router.put("/:id", authMiddleware, updateBrand);
router.delete("/:id", authMiddleware, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;
