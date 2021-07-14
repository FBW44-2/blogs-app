const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signIn = async (req, res, next) => {
  console.log(req.body);
  const { email, password, confirmPassword, userName } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      if (password === confirmPassword) {
        const hashPass = await bcrypt.hash(password, 10);
        console.log(hashPass);
        new User({
          email,
          userName,
          password: hashPass,
        }).save((err, userData) => {
          if (err) console.log(err);
          const token = jwt.sign(
            {
              email,
              userName,
              id: userData._id,
            },
            "jxbcdsn89890x",
            { expiresIn: 2592000000 }
          );

          res.json({ token, userId: userData._id });
          console.log("User data  ==> ", userData);
          console.log("User token  ==> ", token);
        });
      } else {
        console.log("Please confirm the password");
        res.json({ error: "Please confirm the password" });
      }
    } else {
      console.log(email + " already registered!");
      res.json({ error: email + " already registered!" });
    }
  } catch (e) {
    console.log(e);
  }
};
