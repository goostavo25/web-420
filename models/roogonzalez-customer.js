/*
============================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 02 December 2021
; Modified By: Gustavo Roo Gonzalez
; Description:  NodeShopper API.
===========================================
*/

// Require Statements
const mongoose = require("mongoose");

// Declare Schema variable and assign mongoose.Schema object.
const Schema = mongoose.Schema;

// Declare lineItemSchema variable with needed fields
const lineItemSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
});

// Declare invoice variable with needed fields
const invoiceSchema = new Schema({
  subtotal: Number,
  tax: Number,
  dateCreated: String,
  dateShipped: String,
  lineItems: [lineItemSchema],
});

// Declare invoice variable with needed fields
const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  invoices: [invoiceSchema],
});

// Create Customer and assign mongoose model
const Customer = mongoose.model("Customer", customerSchema);

// Export Customer module
module.exports = Customer;
