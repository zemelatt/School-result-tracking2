const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");

const multer = require("multer");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//req
const register = require("./req/user-register");
const updateScore = require("./req/update-score");
const login = require("./req/user-login");
const stuRegister = require("./req/student-register");
const getalll = require("./req/get-all-students");

//db
db.connect((err) => {
  if (err) console.log(err);
  console.log("db connected");
});
app.use("/uploads", express.static("./uploads"));

//img store
let imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});
// const isImage = (req, file, cb) => {
//   if (file.mimetype.startswith("image")) {
//     cb(null, true);
//   } else {
//     cb(null, Error("only img is allowed"));
//   }
// };
var upload = multer({
  storage: imgconfig,
  // fileFilter: isImage,
});

app.post("/api/registration", register);
app.post("/api/login", login);
app.post("/api-updating-score", updateScore);
app.post("/api/registration-newstudents", register);
//registering new students
app.post("/api-registering", upload.single("photo"), stuRegister);
//get all students
app.get("/api-getall", getalll);
//delete student file
app.delete("/api-delete/byId/:register_id", (req, res) => {
  const id = req.params.register_id;
  const deletee = `DELETE FROM allstudent where  register_id = ${id}`;
  db.query(deletee, (err, result) => {
    if (err) {
      res.send({
        msg: "forign key problem",
      });
    }
    res.send(result);
  });
});

//get one
app.get("/search-by-id/view-one/:register_id", (req, res) => {
  const gett = req.params.register_id;
  const getOne = `select * from allstudent where register_id =${gett}`;
  db.query(getOne, (err, result) => {
    if (err) console.log(err);
    res.send(result);
    console.log(result);
  });
});
app.get("/search-by-id/edit-registerd/:register_id", (req, res) => {
  const gett = req.params.register_id;
  const getOne = `select * from allstudent where register_id = ${gett}`;
  db.query(getOne, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
app.put(
  "/search-by-id/edit-registerd-update/:register_id",
  upload.single("photo"),
  (req, res) => {
    const { name, sex, age, grade, ref_name, relation, address, phone } =
      req.body;
    const register_id = req.params.register_id;
    const newStudent = `UPDATE allstudent SET name='${name}', sex='${sex}', age='${age}', grade=${grade}, ref_name='${ref_name}', relation='${relation}', address='${address}', phone='${phone}' where register_id=${register_id}`;
    db.query(newStudent, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  }
);
//score
app.get("/all-score", (req, res) => {
  const score = "select * from scoresheet";
  db.query(score, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
//update-score
app.put(
  "/search-by-id/edit-score/:student_id",
  upload.single("photo"),
  (req, res) => {
    const { subject_name, quiz1, mid1, quiz2, mid2, final } = req.body;
    const student_id = req.params.student_id;
    console.log(req.params);
    const score = `UPDATE  scoresheet SET subject_name='${subject_name}', quiz1='${quiz1}', mid1='${mid1}', quiz2=${quiz2},  mid2='${mid2}', final='${final}' where  student_id=${student_id}`;

    db.query(score, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  }
);
app.post("/check-score", (req, res) => {
  const { ID } = req.body;
  const value = `select * from scoresheet where student_id=${ID} `;
  db.query(value, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
app.post("/registered-details", (req, res) => {
  const { ID } = req.body;
  const value = `select * from allstudent where register_id=${ID} `;
  db.query(value, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
app.listen(2020, () => {
  console.log("running on 2020");
});
