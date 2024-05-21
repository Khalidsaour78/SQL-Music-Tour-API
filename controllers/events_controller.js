// DEPENDENCIES
const events = require("express").Router();
const db = require("../models");
const { Event } = db;

// FIND ALL EVENTS
events.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll();
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EXPORT
module.exports = events;
