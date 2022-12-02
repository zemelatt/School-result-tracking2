import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import "./tocheck.css";
const ToChickScore = () => {
  const userRef = useRef();
  const [data, setDate] = useState({
    ID: "",
  });
  const [info, setInfo] = useState([]);

  useEffect(() => {
    userRef.current.focus();
  });
  const handeleOnChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...data,
      [name]: value,
    });
  };
  const search = (e) => {
    e.preventDefault();
    const { ID } = data;
    if (ID) {
      Axios.post("http://localhost:2020/check-score", data).then((response) => {
        setInfo(response.data);
        console.log(response.data[0]);
      });
    } else {
      alert("invalid inputs");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="ID"
          placeholder="INSERT ID"
          autoComplete="off"
          onChange={handeleOnChange}
          ref={userRef}
          required
        />

        <button className="login-btn" onClick={search}>
          Search
        </button>
      </div>

      <div>
        <table id="list">
          <thead>
            <tr>
              <th>Subject</th>
              <th>ID</th>
              <th>Quiz-1</th>
              <th>Test-1</th>
              <th>Quiz-2</th>
              <th>Test-2</th>
              <th>Final</th>
            </tr>
          </thead>
          {info.length > 0 ? (
            info.map((val, index) => (
              <tbody>
                <tr key={val.student_id}>
                  <td>{val.subject_name}</td>
                  <td>{val.student_id}</td>
                  <td>{val.quiz1}</td>
                  <td>{val.mid1}</td>
                  <td>{val.quiz2}</td>
                  <td>{val.mid2}</td>
                  <td>{val.final}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <p>no result</p>
          )}
        </table>
      </div>
    </>
  );
};

export default ToChickScore;
