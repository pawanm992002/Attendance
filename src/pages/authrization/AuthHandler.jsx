import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const StudentRegister = () => {
  const navigate = useNavigate();
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
  const StudentRegisterFormHandeller = async (e) => {
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
        alert("Now login please");
      }
    } catch (err) {
      alert("Something went wrong");
      return;
    }
  };

  return (
    <form method="POST" onSubmit={StudentRegisterFormHandeller}>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={changeHandler}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="College_Id"
        value={input.College_Id}
        onChange={changeHandler}
        placeholder="Student ID"
        required
      />
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={changeHandler}
        placeholder="Email ID"
        required
      />
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={changeHandler}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="cpassword"
        value={input.cpassword}
        onChange={changeHandler}
        placeholder="Confirm Password"
        required
      />
      <input type="submit" value="Register" className="btn" />
    </form>
  );
};
export const TeacherRegister = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Teacher_Id: "",
    Email: "",
    Username: "",
    Password: "",
    cpassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const TeacherRegisterFormHandeller = async (e) => {
    e.preventDefault();
    const { Username, Teacher_Id, Email, Password, cpassword } = input;
    if (!Username || !Teacher_Id || !Email || !Password || !cpassword) {
      alert("please fill all the fields");
      return;
    } else if (Password !== cpassword) {
      alert("password and confirm password must be same");
      return;
    }
    try {
      const { data } = await axios.post(
        "/api/auth/Teacher/",
        {
          username: Username,
          Teacher_Id: Teacher_Id,
          email: Email,
          password: Password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      alert(data.msg);
      if (data.status) {
        alert("Now Please Login");
      }
    } catch (err) {
      alert("something went wrong");
    }
  };
  return (
    <form method="POST" onSubmit={TeacherRegisterFormHandeller}>
      <input
        type="text"
        name="Username"
        value={input.Username}
        onChange={changeHandler}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="Teacher_Id"
        value={input.Teacher_Id}
        onChange={changeHandler}
        placeholder="Teacher ID"
        required
      />
      <input
        type="email"
        name="Email"
        value={input.Email}
        onChange={changeHandler}
        placeholder="Email ID"
        required
      />
      <input
        type="password"
        name="Password"
        value={input.Password}
        onChange={changeHandler}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="cpassword"
        value={input.cpassword}
        onChange={changeHandler}
        placeholder="Confirm Password"
        required
      />

      <input type="submit" value="TeacherRegister" className="btn" />
    </form>
  );
};
export const StudentLogin = () => {
  const navigate = useNavigate();
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
  const StudentLoginFormHandeller = async (e) => {
    e.preventDefault();
    const { id, password } = input;
    const { data } = await axios.post(
      "/api/auth/login",
      {
        College_Id: id,
        password: password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    alert(data.msg);

    if (data.status) {
      localStorage.setItem("studentInfo", JSON.stringify(data.user));
      navigate("/student");
    }
  };
  return (
    <>
      <form method="POST" onSubmit={StudentLoginFormHandeller}>
        <input
          placeholder="Student Id"
          type="text"
          name="id"
          value={input.id}
          onChange={changeHandler}
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={input.password}
          onChange={changeHandler}
          required
        />
        <input type="submit" value="Log In" className="btn" />
      </form>
      <div className="forgetPassword">Forget Password ?</div>
    </>
  );
};
export const TeacherLogin = () => {
  const navigate = useNavigate();
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
  const TeacherLoginFormHandeller = async (e) => {
    e.preventDefault();
    const { id, password } = input;
    const { data } = await axios.post(
      "/api/auth/Teacher/login",
      {
        Teacher_Id: id,
        password: password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    alert(data.msg);
    if (data.status) {
      localStorage.setItem("teacherInfo", JSON.stringify(data.user));
      navigate("/teacher");
    }
  };
  return (
    <>
      <form method="POST" onSubmit={TeacherLoginFormHandeller}>
        <input
          placeholder="Teacher Id"
          type="text"
          name="id"
          value={input.id}
          onChange={changeHandler}
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={input.password}
          onChange={changeHandler}
          required
        />
        <input type="submit" value="Log In" className="btn" />
      </form>
      <div className="forgetPassword">Forget Password ?</div>
    </>
  );
};
