const db = require("../db");
module.exports = function update(req, res) {
  const { subject_name, quiz1, mid1, quiz2, mid2, final, student_id } =
    req.body;

  console.log(req.body);
  const addingScore =
    "INSERT INTO scoreSheet values(null,'" +
    subject_name +
    "','" +
    student_id +
    "','" +
    quiz1 +
    "','" +
    mid1 +
    "','" +
    quiz2 +
    "','" +
    mid2 +
    "','" +
    final +
    "')";
  db.query(addingScore, (err, result) => {
    if (err) {
      res.send({
        msg: "check student Id",
      });
    } else {
      console.log("Updated");
    }
  });
};
