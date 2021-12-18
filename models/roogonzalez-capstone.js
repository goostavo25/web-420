/*
============================================
; Title: roogonzalez-capstone.js
; Author: Professor Krasso
; Date: 17 December 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Team API
===========================================
*/

// Require Statements
const mongoose = require("mongoose");

// Declaring Schema variable and assign mongoose.Schema object
const Schema = mongoose.Schema;

// Declaring playerSchema
const playerSchema = new Schema({
  firstName: String,
  lastName: String,
  salary: Number,
});

// Declaring teamSchema
const teamSchema = new Schema({
  name: String,
  mascot: String,
  players: [playerSchema],
});

//Create Team variable and assign it to mongoose model
const Team = mongoose.model("Team", teamSchema);

// Export Team
module.exports = Team;
