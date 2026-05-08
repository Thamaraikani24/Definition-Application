const express = require("express");
const router=express.Router();

const {
  createStage,
  getAllStages,
  getSingleStage,
  updateStage,
  deleteStage,
} = require("../controllers/stagecontroller");




router.post("/create", createStage);

router.get("/all", getAllStages);

router.get("/:id", getSingleStage);

router.put("/update/:id", updateStage);

router.delete("/delete/:id", deleteStage);


module.exports = router;