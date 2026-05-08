const Stage = require("../models/stageModel");
const validateStage = require("../validation/stageValidation");


// Creating a stage
exports.createStage = async (req, res) => {
  try {

    const error = validateStage(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }


    if (req.body.definitionMethod === "Manual") {
      req.body.rangeType = null;
      req.body.startDay = null;
      req.body.endDay = null;
    }


    const stage = await Stage.create(req.body);

    res.status(201).json({
      success: true,
      message: "Stage Created Successfully",
      data: stage,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get all stages
exports.getAllStages = async (req, res) => {
  try {

    const stages = await Stage.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: stages.length,
      data: stages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get single stage
exports.getSingleStage = async (req, res) => {
  try {

    const stage = await Stage.findById(req.params.id);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: stage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.updateStage = async (req, res) => {
  try {

    const error = validateStage(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }


    if (req.body.definitionMethod === "Manual") {
      req.body.rangeType = null;
      req.body.startDay = null;
      req.body.endDay = null;
    }


    const stage = await Stage.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Stage Updated Successfully",
      data: stage,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete stage
exports.deleteStage = async (req, res) => {
  try {

    const stage = await Stage.findByIdAndDelete(req.params.id);

    if (!stage) {
      return res.status(404).json({
        success: false,
        message: "Stage Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Stage Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};