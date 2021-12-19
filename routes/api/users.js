const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");

//@route        POST api/users
//@desc         Register User
//@acess        public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check("password", "Please enter a password with atleast 6 chars").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //see if user exist
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exist" }] });
      }
      //Get users gravatar

      //encrypt password

      //return jasonwebtoken
      res.send("User route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
