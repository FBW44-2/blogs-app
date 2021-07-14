const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  try {
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
