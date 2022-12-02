import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./students.css";
const Score = () => {
  const input = useRef(null);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    input.current.focus();
  });
  useEffect(() => {
    const getUserdata = async (e) => {
      const reqData = await fetch("http://localhost:2020/all-score");
      const resData = await reqData.json();
      setData(resData);
      setFilterData(resData);
      console.log(resData);
    };
    getUserdata();
  }, []);
  const handeleSearch = (e) => {
    const getSearch = e.target.value;

    if (getSearch.length > 0) {
      const searchdata = data.filter((item) =>
        item.student_id.toString().includes(getSearch)
      );
      setData(searchdata);
    } else {
      setData(filterData);
    }
    setQuery(getSearch);
  };

  return (
    <>
      <div className="reegistration-form">
        <input
          id="search"
          type="TEXT"
          name="ID"
          value={query}
          placeholder="INTER ID"
          ref={input}
          onChange={handeleSearch}
        />
      </div>

      <div>
        <table id="list">
          <tr>
            <th>id</th>
            <th>Subject</th>
            <th>Quiz-1</th>
            <th>Test-1</th>
            <th>Quiz-2</th>
            <th>Test-2</th>
            <th>final-exam</th>
            <th>Action</th>
          </tr>

          {data.map((getUser, index) => (
            <tr key={index}>
              <td>{getUser.student_id}</td>
              <td>{getUser.subject_name}</td>

              <td>{getUser.quiz1}</td>
              <td>{getUser.mid1}</td>
              <td>{getUser.quiz2}</td>
              <td>{getUser.mid2}</td>
              <td>{getUser.final}</td>
              <td>
                <Link to={`/search-by-id/edit-score/${getUser.student_id}`}>
                  <button className="action-btn" style={{ color: "black" }}>
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Score;
