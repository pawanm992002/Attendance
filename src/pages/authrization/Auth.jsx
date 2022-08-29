import "./auth.css";
import { useState } from "react";
import {
  StudentRegister,
  TeacherRegister,
  StudentLogin,
  TeacherLogin,
} from "./AuthHandler";
export default function Auth() {
  const [User, SetUser] = useState(true); //for student its true
  const [Choice, SetChoice] = useState(true); //For Registration its true

  const AccountStudentHandeller = () => {
    SetUser(true);
  };
  const AccountTeacherHandeller = () => {
    SetUser(false);
  };

  const LoginHandeller = () => {
    SetChoice(false);
  };
  const RegisterHandeller = () => {
    SetChoice(true);
  };

  return (
    <>
      <div className="authContainer">
        {User ? (
          <img src="Assets/Student-bg.jpg" alt="" />
        ) : (
          <img src="Assets/Teacher-bg.jpg" alt="" />
        )}
        <div className="authWrapper">
          <div className="authSideImg">
            {Choice ? (
              <img src="Assets/create.jpg" alt="" />
            ) : (
              <img src="Assets/login.jpg" alt="" />
            )}
            <div className="authLeftSideBtns">
              <button
                onClick={AccountStudentHandeller}
                className="authStudentBtn"
              >
                Student
              </button>
              <button
                onClick={AccountTeacherHandeller}
                className="authTeacherBtn"
              >
                Teacher
              </button>
            </div>
          </div>
          <div className="authForm">
            <div className="ChoiceBtns">
              <button onClick={LoginHandeller} className="LoginBtn">
                Login
              </button>
              <button onClick={RegisterHandeller} className="RegisterBtn">
                Register
              </button>
            </div>
            <div className="Form">
              {User ? (
                Choice ? (
                  <StudentRegister />
                ) : (
                  <StudentLogin />
                )
              ) : Choice ? (
                <TeacherRegister />
              ) : (
                <TeacherLogin />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
