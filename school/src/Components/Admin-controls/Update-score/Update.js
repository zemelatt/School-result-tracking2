import React, { useState } from "react";
import "./update.css";
import Axios from "axios";
const Update = () => {
  const [score, setScore] = useState({
    subject_name: "",
    student_id: "",
    quiz1: "",
    mid1: "",
    quiz2: "",
    mid2: "",
    final: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setScore({
      ...score,
      [name]: value,
    });
  };
  const Add = (e) => {
    // e.preventDefault();
    try {
      const { subject_name, student_id, quiz1, mid1, quiz2, mid2, final } =
        score;
      if (
        subject_name &&
        student_id &&
        quiz1 &&
        mid1 &&
        quiz2 &&
        mid2 &&
        final
      ) {
        Axios.post("http://localhost:2020/api-updating-score", score).then(
          (response) => {
            alert(response.data.msg);
          }
        );
      } else {
        alert("invalid input");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="adding-score-board">
        <h3 className="adding-new-score">Adding Score</h3>
        <div>
          <label className="labels">Subject:</label>
          <div>
            <input
              className="inputs"
              type="text"
              name="subject_name"
              id=""
              onChange={handleChange}
            />
          </div>
          <label className="labels">Student ID:</label>
          <div>
            <input
              className="inputs"
              type="number"
              name="student_id"
              onChange={handleChange}
            />
          </div>
          <label className="labels">quiz 1:</label>
          <div>
            <input
              className="inputs"
              type="number"
              min="0"
              max="5"
              name="quiz1"
              onChange={handleChange}
            />
          </div>

          <label className="labels">m-test 1 :</label>
          <div>
            <input
              className="inputs"
              type="number"
              min="0"
              max="20"
              name="mid1"
              onChange={handleChange}
            />
          </div>

          <label className="labels">quiz 2:</label>
          <div>
            <input
              className="inputs"
              type="number"
              min="0"
              max="5"
              name="quiz2"
              onChange={handleChange}
            />
          </div>

          <label className="labels">m-test 2:</label>
          <div></div>
          <div>
            <input
              className="inputs"
              type="number"
              min="0"
              max="20"
              name="mid2"
              onChange={handleChange}
            />
          </div>

          <label className="labels">final:</label>
          <div>
            <input
              className="inputs"
              type="number"
              min="0"
              max="50"
              name="final"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" onClick={Add}>
          Add
        </button>
      </div>
    </>
  );
};

export default Update;
