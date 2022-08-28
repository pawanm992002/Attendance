import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

function Student() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("studentInfo")) {
      navigate("/studentInfo");
    }
  }, [navigate]);
  const [input, setInput] = useState({
    username: "",
    College_Id: "",
    email: "",
    password: "",
    cpassword: "",
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
    const { username, College_Id, email, password, cpassword } = input;
    if (!username || !College_Id || !email || !password || !cpassword) {
      alert("please fill all the fields");
      return;
    } else if (password !== cpassword) {
      alert("password and confirm password must be same");
      return;
    }
    try {
      const { data } = await axios.post(
        "/api/auth/",
        {
          username,
          College_Id,
          email,
          password,
          cpassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      alert(data.msg);
      if (data.status) {
        localStorage.setItem("studentInfo", JSON.stringify(data.User));
        navigate("/studentInfo");
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
          <h2>Student Registration Form</h2>
          <input
            className="input"
            type="text"
            name="username"
            value={input.username}
            onChange={changeHandler}
            placeholder="Name"
            required
          />
          <input
            className="input"
            type="text"
            name="College_Id"
            value={input.College_Id}
            onChange={changeHandler}
            placeholder="Student ID"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            value={input.email}
            onChange={changeHandler}
            placeholder="Email ID"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            value={input.password}
            onChange={changeHandler}
            placeholder="Password"
            required
          />
          <input
            className="input"
            type="password"
            name="cpassword"
            value={input.cpassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            required
          />

          <input type="submit" value="StudentRegister" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Student;
