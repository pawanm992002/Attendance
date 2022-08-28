import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("studentInfo")) {
      navigate("/student/studentInfo");
    }
    if (localStorage.getItem("teacherInfo")) {
      navigate("/teacherInfo");
    }
  }, [navigate]);
  const [input, setInput] = useState({
    id: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert(input.id + "  " + input.password);
  };
  return (
    <>
      <div className="main">
        <form className="loginform" onSubmit={submitHandler} method="post">
          <div className="headfield">
            <img src="https://source.unsplash.com/random" />
            <h2>Registration Page</h2>
            <button
              onClick={() => navigate("/student")}
              className="student btn"
            >
              Student
            </button>
            <button
              onClick={() => navigate("/teacher")}
              className="teacher btn"
            >
              Teacher
            </button>
          </div>
          <div className="contentfield">
            <h2>Login Form</h2>
            <div className="field">
              <label>ID : </label>
              <input
                type="text"
                name="id"
                value={input.id}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="field">
              <label>Password : </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={changeHandler}
                required
              />
            </div>

            <input type="submit" value="Log In" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
