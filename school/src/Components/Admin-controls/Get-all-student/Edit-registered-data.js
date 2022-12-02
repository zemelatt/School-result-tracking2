import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const EditRegisteredStudents = () => {
  const { register_id } = useParams();
  const [singleData, setData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [grade, setGrade] = useState("");

  const [refname, setRefNames] = useState("");
  const [relation, setRelation] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setRefPhoneNum] = useState("");

  const fullName = (e) => {
    setName(e.target.value);
  };
  const Age = (e) => {
    setAge(e.target.value);
  };
  const gender = (e) => {
    setSex(e.target.value);
  };
  const gread = (e) => {
    setGrade(e.target.value);
  };

  const refName = (e) => {
    setRefNames(e.target.value);
  };

  const refRelation = (e) => {
    setRelation(e.target.value);
  };
  const refPoneNumber = (e) => {
    setRefPhoneNum(e.target.value);
  };
  const refAddr = (e) => {
    setAddress(e.target.value);
  };
  useEffect(() => {
    const getData = async (e) => {
      const reqData = await fetch(
        `http://localhost:2020/search-by-id/edit-registerd/${register_id}`
      );
      const resData = await reqData.json();
      console.log(resData);
      setData(resData);
    };
    getData();
  }, []);
  const updateData = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("name", name);
    formData.append("age", age);
    formData.append("sex", sex);
    formData.append("grade", grade);
    formData.append("ref_name", refname);
    formData.append("relation", relation);
    formData.append("phone", phone);
    formData.append("address", address);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await Axios.put(
      `http://localhost:2020/search-by-id/edit-registerd-update/${register_id}`,
      formData,
      config
    );
  };

  return (
    <>
      <div className="all-in-one">
        <form className="reegistration-form">
          <label>full name</label>
          <div>
            <input
              className="input-form"
              type="text"
              name="name"
              autoComplete="off"
              onChange={fullName}
              required
            />
          </div>
          <div>
            <label>Sex</label>
            <div>
              <select className="select-gread" name="sex" onChange={gender}>
                <option label="Male" value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <label>Age</label>
          <input
            className="input-form"
            type="number"
            name="age"
            min="5"
            max="20"
            onChange={Age}
            required
          />
          <label>Starting Grade</label>
          <div>
            <select className="select-gread" name="grade" onChange={gread}>
              <option label="1" value="1"></option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label>Referee name</label>
            <input
              className="input-form"
              type="text"
              name="ref_name"
              autoComplete="off"
              onChange={refName}
              required
            />
            <label>Relation </label>
            <input
              className="input-form"
              type="text"
              name="relation"
              autoComplete="off"
              onChange={refRelation}
              required
            />
            <label>Adress </label>
            <input
              className="input-form"
              type="text"
              name="address"
              autoComplete="off"
              onChange={refAddr}
              required
            />
            <label>Phone number </label>
            <input
              className="input-form"
              type="tel"
              name="phone"
              autoComplete="off"
              onChange={refPoneNumber}
              required
            />
          </div>

          <button className="submit-btn" type="submit" onClick={updateData}>
            Update
          </button>
        </form>
      </div>
      ;
    </>
  );
};

export default EditRegisteredStudents;
