const mongoose = require("mongoose");

const crewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Crew = mongoose.model("Crew", crewSchema);
module.exports = Crew;
