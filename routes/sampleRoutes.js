const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sampleController");

router.post("/demo", sampleController.demo);
module.exports = router;
