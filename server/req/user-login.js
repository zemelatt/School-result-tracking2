const db = require("../db");
const bcrypt = require("bcrypt");
module.exports = function login(req, res) {
  const { name, password } = req.body;
  if (req.body.name.trim() === "" || req.body.password.trim() === "") {
    return res.send({
      msg: "name and password could not be empty",
    });
  }
  db.query("select * from users where name=?", name, (err, result) => {
    if (err) {
      return res.send({
        msg: err,
      });
    }
    if (result.length < 1) {
      return res.send({
        msg: "email or pwd err",
      });
    }
    bcrypt.compare(password, result[0].password).then((isMatch) => {
      if (isMatch === false) {
        return res.send({
          msg: "email or pwd err",
        });
      }
      // res.send(result);
      res.send({
        msg: "logged in successfully",
        result: result,
      });
    });
  });
};
