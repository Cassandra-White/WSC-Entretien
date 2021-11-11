const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Crew = require("../models/crewModel.js");

const crewRouter = express.Router();

crewRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const crews = await Crew.find({});
    console.log(crews);
    res.send(crews);
  })
);

crewRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    if (req.body.name.length === 0) {
      res.status(400).send({ message: "Vous n'avez pas renseigné de nom" });
    } else {
      const crew = new Crew({
        name: req.body.name,
      });
      const createdCrew = await crew.save();
      res.status(201).send({ message: "New crew Created", crew: createdCrew });
    }
  })
);


module.exports = crewRouter;
