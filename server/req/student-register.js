const db = require("../db");
const multer = require("multer");
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
module.exports = function stuRegister(req, res) {
  const { date, name, sex, age, grade, ref_name, relation, address, phone } =
    req.body;
  const { filename } = req.file;
  const newStudent =
    "INSERT INTO allStudent values(null,'" +
    date +
    "','" +
    name +
    "','" +
    sex +
    "','" +
    age +
    "','" +
    grade +
    "','" +
    filename +
    "','" +
    ref_name +
    "','" +
    relation +
    "','" +
    address +
    "','" +
    phone +
    "')";
  db.query(newStudent, (err, result) => {
    if (err) console.log(err);
    res.send(result);
    console.log("registered");
  });
};
