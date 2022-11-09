var express = require("express");
const { getUserDetails } = require("../services/userDetails.service");
var router = express.Router();

router.get("/", getUserDetails);

module.exports = router;
