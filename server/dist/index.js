"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 8080;
app.use(_express["default"]["static"]('./public'));
app.listen(PORT, function () {
  console.log("Listening on port: ".concat(PORT));
});