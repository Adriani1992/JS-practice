"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getOutTown = function getOutTown(name) {
  console.log("".concat(name, " hurry!!! get out the town!!"));
};

getOutTown('Jenny');

var Girl = function Girl(name, age, title) {
  _classCallCheck(this, Girl);

  this.name = name;
  this.age = age;
  this.title;
}; //normal output
//npx babel script.js --out-file script-compiled.js
//every time that you change it
//npx babel src/index.js --watch --out-file dist/assets/bundle.js
