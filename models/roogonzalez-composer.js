/*
============================================
; Title: composer.js
; Author: Professor Krasso
; Date: 13 November 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Composer API
===========================================
*/

// Require Statement for Mongoose
const mongoose = require("mongoose");

// Variable Schema
const Schema = mongoose.Schema;

// Declaring composerSchema
const composerSchema = new Schema({
  firstName: String,
  lastName: String,
});

// Create Composer - assign mongoose.Schema object
const Composer = mongoose.model("Composer", composerSchema);

// Export Composer model
module.exports = Composer;
