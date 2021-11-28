/*
============================================
; Title: roogonzalez-user.js
; Author: Professor Krasso
; Date: 24 November 2021
; Modified By: Gustavo Roo Gonzalez
; Description: User API
===========================================
*/

// Require Statement
const mongoose = require("mongoose");

// Declaring Schema variable and assign mongoose.Schema object
const Schema = mongoose.Schema;

// Declaring dependentSchema variable
const userSchema = new Schema({
  userName: String,
  Password: String,
  emailAddress: Array,
});

// Create User and assign it to mongoose model
const User = mongoose.model("User", userSchema);

// Export User
module.exports = User;
