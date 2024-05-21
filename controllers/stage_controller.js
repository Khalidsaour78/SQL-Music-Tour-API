// DEPENDENCIES
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;

// FIND ALL stages
stages.get("/", async (req, res) => {
  try {
    const foundStages = await stage.findAll();
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC STAGE
stages.get("/:id", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id },
    });
    res.status(200).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EXPORT
module.exports = stages;
