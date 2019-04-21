const router = require("express").Router();
const Contact = require("./Completed");
const signupRoutes = require("./signin");
const signinRoutes = require("./signinReal");
const verify = require("./verify");
const logout = require("./logout");

router.use("/contact", Contact);

router.use("/account/signup", signupRoutes);

router.use("/account/signin", signinRoutes);

router.use("/account/verify", verify);

router.use("/account/logout", logout);

module.exports = router;