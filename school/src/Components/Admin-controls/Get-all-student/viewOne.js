import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./getall-student.css";
const ViewOne = () => {
  const [singleData, setData] = useState([]);
  const { register_id } = useParams();
  useEffect(() => {
    const getData = async (e) => {
      const reqData = await fetch(
        `http://localhost:2020/search-by-id/view-one/${register_id}`
      );
      const resData = await reqData.json();
      console.log(resData);
      setData(resData);
    };
    getData();
  }, []);
  return (
    <div className="student-file">
      {singleData.map((getUser, index) => (
        <div className="registerd-student-view">
          <div className="image details" key={index}>
            <img
              src={require(`../../../../../server/uploads/${getUser.filename}`)}
              height={200}
              width={200}
              alt="students-pp"
            />
          </div>
          <div className="details">
            <h4>Name: {getUser.name}</h4>
            <h5>Id: {getUser.register_id}</h5>
            <h6>Sex:{getUser.sex}</h6>
            <p>Reg.Date: {getUser.date}</p>
            <address>{getUser.r_phone}</address>
            <p>Ref-Name{getUser.ref_name}</p>
            <address>Ref-Phone number:{getUser.phone}</address>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewOne;
