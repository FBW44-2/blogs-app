const router = require("express").Router();
const user = require("../controllers/user");

router.post("/signup", user.signIn);

module.exports = router;
