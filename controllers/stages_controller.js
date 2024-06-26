// DEPENDENCIES
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;

// FIND ALL stages
stages.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll();
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

// CREATE A STAGE
stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new Stage",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update stage
stages.put("/:id", async (req, res) => {
  try {
    const updatedStages = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedStages} stage(s)`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete stage
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedStage} stage(s)`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// EXPORT
module.exports = stages;
