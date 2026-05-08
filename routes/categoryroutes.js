const express = require("express");

const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();


router.post("/create", createCategory);

router.get("/all", getAllCategories);

router.get("/:id", getSingleCategory);

router.put("/update/:id", updateCategory);

router.delete("/delete/:id", deleteCategory);


module.exports = router;