const db = require("../db");

module.exports = function getall(req, res) {
  const getall = "select * from allstudent";
  db.query(getall, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};
