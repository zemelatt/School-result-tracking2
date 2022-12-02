import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const Getallstudents = () => {
  const REF = useRef(null);
  useEffect(() => {
    REF.current.focus();
  });
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getUserdata = async (e) => {
      const reqData = await fetch("http://localhost:2020/api-getall");
      const resData = await reqData.json();
      setData(resData);
      setFilterData(resData);
    };
    getUserdata();
  }, []);
  const handeleSearch = (e) => {
    const getSearch = e.target.value;

    if (getSearch.length > 0) {
      const searchdata = data.filter((item) =>
        item.name.toLowerCase().includes(getSearch)
      );
      setData(searchdata);
    } else {
      setData(filterData);
    }
    setQuery(getSearch);
  };
  const handleDelete = async (register_id) => {
    const res2 = await fetch(
      `http://localhost:2020/api-delete/byId/${register_id}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  return (
    <>
      <div className="reegistration-form">
        <input
          id="search"
          type="text"
          name="ID"
          value={query}
          placeholder="INTER NAME"
          ref={REF}
          onChange={handeleSearch}
        />
      </div>

      <div>
        <table id="list">
          <thead>
            <tr>
              <th>id</th>
              <th>Full name</th>
              <th>sex</th>
              <th>Reg date</th>
              <th>Grade</th>
              <th>ref name</th>
              <th>ref phone number</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((getUser, index) => (
            <tbody>
              <tr key={index}>
                <td>{getUser.register_id}</td>
                <td>{getUser.name}</td>
                <td>{getUser.sex}</td>
                <td>{getUser.date}</td>
                <td>{getUser.grade}</td>
                <td>{getUser.ref_name}</td>
                <td>{getUser.phone}</td>
                <td>
                  <button
                    className="action-btn"
                    style={{ color: "black" }}
                    onClick={() => handleDelete(getUser.register_id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/search-by-id/edit-registerd/${getUser.register_id}`}
                  >
                    <button className="action-btn" style={{ color: "black" }}>
                      Edit
                    </button>
                  </Link>
                  <Link to={`/search-by-id/view-one/${getUser.register_id}`}>
                    <button className="action-btn" style={{ color: "black" }}>
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Getallstudents;
