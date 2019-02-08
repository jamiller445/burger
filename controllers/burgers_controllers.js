//  burgers_controller.js

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    console.log("here");
    burger.all(function(data) {
        
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      console.log("line 15 burgers_controllers.js")
      res.render("index", hbsObject);
    });
  });
  
module.exports = router;