const router = require("express").Router();
const Contact = require("../../Controllers/ContactController");


router.route("/")
.post(Contact.create)



module.exports = router;