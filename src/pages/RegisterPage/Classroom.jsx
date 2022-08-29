import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

function Classroom() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    classroomName: "",
    classroomId: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { classroomName, classroomId } = input;
    if (!classroomName || !classroomId) {
      alert("please fill all the fields");
      return;
    }
    try {
      const { _id } = JSON.parse(localStorage.getItem("teacherInfo"));
      const { data } = await axios.post(
        `/api/classroom/${_id}`,
        {
          RoomId: classroomId,
          name: classroomName,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      alert(data.msg);
      if (data.status) {
        navigate("/teacher");
        return;
      }
    } catch (err) {
      alert("Something went wrong");
      return;
    }
  };
  return (
    <div className="main">
      <form id="studentRegister" onSubmit={submitHandler} method="post">
        <img src="https://source.unsplash.com/random" />
        <div className="form">
          <h2>Create Classroom</h2>
          <input
            className="input"
            type="text"
            name="classroomName"
            value={input.classroomName}
            onChange={changeHandler}
            placeholder="ClassRoom Name"
            required
          />
          <input
            className="input"
            type="text"
            name="classroomId"
            value={input.classroomId}
            onChange={changeHandler}
            placeholder="Classroom ID"
            required
          />

          <input type="submit" value="Create It" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Classroom;
