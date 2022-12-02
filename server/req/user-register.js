const db = require("../db");
const bcrypt = require("bcrypt");
module.exports = function register(req, res) {
  let { name, password, password2 } = req.body;
  let user = { name, password };
  if (!name) {
    return res.send({
      msg: "Name can't be empt",
    });
  }
  if (!password || password.length < 4) {
    return res.send({
      msg: "enter the password",
    });
  }
  if (password != password2) {
    return res.send({
      msg: "password must match",
    });
  }

  db.query(`select * from users where name='${name}'`, (err, result) => {
    if (err) {
      res.send({ msg: err });
    } else if (result.length !== 0) {
      res.send({
        msg: "the name is already used, please log in !!",
      });
    } else {
      bcrypt
        .hash(password, 8)
        .then((hash) => {
          user.password = hash;
        })
        .then(() => {
          db.query("insert into users set ?", user, (err, result) => {
            if (err) {
              return res.send({
                msg: err,
              });
            }

            db.query(
              "select * from users where name=?",
              name,
              (err, result) => {
                if (err) {
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  userdata: user,
                  msg: "successfully registered",
                });
              }
            );
          });
        });
    }
  });
};
