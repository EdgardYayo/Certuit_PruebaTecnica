const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("../controllers/user.controller");


router.post("/sign-up", signUp())


router.post("/login", logIn())


module.exports = router;