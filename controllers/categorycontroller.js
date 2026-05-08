const Category = require("../models/categoryModel");
const validateCategory = require("../validation/categoryValidation");


// Creating a category
exports.createCategory = async (req, res) => {
  try {

    const error = validateCategory(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const category = await Category.create(req.body);

    res.status(201).json({
      success: true,
      message: "Category Created Successfully",
      data: category,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get all categories
exports.getAllCategories = async (req, res) => {
  try {

    const categories = await Category.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get single category
exports.getSingleCategory = async (req, res) => {
  try {

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update category
exports.updateCategory = async (req, res) => {
  try {

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category Updated Successfully",
      data: category,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete category
exports.deleteCategory = async (req, res) => {
  try {

    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};