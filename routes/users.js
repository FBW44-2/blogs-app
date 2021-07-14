const router = require("express").Router();
const user = require("../controllers/user");

router.post("/signup", user.signUp);

module.exports = router;
