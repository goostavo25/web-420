/*
; ============================================
;  Title: app.js
;  Author: Professor Krasso
;  Date: 23 October 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: Assignment-1.2 Project Setup
; ============================================
*/

// Requirement statements
var express = require("express");
var http = require("http");
var swaggerUI = require("swagger-ui-express");
var swaggerJSDoc = require("swagger-jsdoc");
var mongoose = require("mongoose");
var composerAPI = require("./routes/roogonzalez-composer-routes");
var personRoutes = require("./routes/roogonzalez-person-routes");
var userRoutes = require("./routes/roogonzalez-session-routes");
var customerRoutes = require("./routes/roogonzalez-node-shopper-routes");
var teamRoutes = require("./routes/roogonzalez-capstone-routes");

//Set Port
var port = process.env.PORT || 3000;

//Assigning Variable App to express library
var app = express();

//Set the app to use express.json
app.use(express.json());

//Set the app to use express.urlencoded
app.use(express.urlencoded({ extended: true }));

//Connect to MongoDB
const conn = "mongodb+srv://web420_user:p455w0rd@buwebdev-cluster-1.umga8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(conn, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Application connected to MongoDB instance`);
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
  });

//Defining object named options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WEB 420 RESTful APIs",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], //files containing annotations for openAPI specifications.
};

// Declaring openAPISpecification variable
const openAPISpecification = swaggerJSDoc(options);

//Declaring swaggerSpec variable
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openAPISpecification));
app.use("/api", [composerAPI, personRoutes, userRoutes, customerRoutes, teamRoutes]);

//Create server and listen on port 3000.
http.createServer(app).listen(port, function () {
  console.log("Application started on port " + port + "!");
});
