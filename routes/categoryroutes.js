const express = require("express");
const router=express.Router();

const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categorycontroller");

//const router = express.Router();


router.post("/create", createCategory);

router.get("/all", getAllCategories);

router.get("/:id", getSingleCategory);

router.put("/update/:id", updateCategory);

router.delete("/delete/:id", deleteCategory);


module.exports = router;