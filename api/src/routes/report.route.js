const express = require("express");
const { generateReport, bringInTheReport } = require("../controllers/report.controller");
const router = express.Router();



router.post("/new/:id", generateReport);

router.get("/:id", bringInTheReport);



module.exports = router;