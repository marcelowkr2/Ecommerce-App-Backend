const express = require("express");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require("../controller/colorCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createColor);
router.put("/:id", authMiddleware, updateColor);
router.delete("/:id", authMiddleware, deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);

module.exports = router;
