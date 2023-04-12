const express = require("express");
const { generateReport, bringInTheReport } = require("../controllers/report.controller");
const router = express.Router();



router.post("/new/:userId", generateReport);

router.get("/:userId", bringInTheReport);



module.exports = router;