// burger.js

var orm = require("../config/orm.js");

// orm.selectAll("burgers");

var burger = {
    all: function(cb) {
      console.log("in burger.all");
      orm.selectAll("burgers", function(res) {
        console.log("burger.all res= " + res);
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    }
};
    
module.exports = burger;