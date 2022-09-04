import classroomPic from "../../images/classroom.jpg";
import Navbar from "../others/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../attendance.css";

function StudentClassroom() {
  const navigate = useNavigate();
  const [studentDetail, setstudentDetail] = useState({});
  const fetchStudent = async () => {
    const localStudent = JSON.parse(localStorage.getItem("studentInfo"));
    if (!localStudent) {
      navigate("/");
    }
    const { data } = await axios.get(`/api/Student/${localStudent._id}`);
    setstudentDetail(data.data);
    localStorage.setItem("studentInfo", JSON.stringify(data.data));
  };

  useEffect(() => {
    fetchStudent();
  }, [studentDetail]);
  return (
    <>
      <Navbar />
      <div className="studentClassroom">
        <img src={classroomPic} />
        <div className="insideStudentClass">
          {/* <aside className="asideClassroom">
          <div>classroom 1</div>
          <div>classroom 2</div>
          <div>classroom 3</div>
          <div>classroom 4</div>
        </aside> */}
          <main className="mainClassroom">
            <div className="box1 box">
              <div className="boxField">Total Attendance</div>
              <div className="boxField">Total Present</div>
            </div>
            <div className="box2 box">
              <div className="boxField">Classroom Name</div>
              <div className="boxField">Classroom Code</div>
              <div className="boxField">Teacher Name</div>
            </div>
            <div className="box3">
              <button className="Presentbtn">Mark Present</button>
              <button className="leavebtn">Leave Classroom</button>
            </div>
            <div className="AttendanceBox">
              <ul>
                <li className="AttendanceList">
                  <span>ClassName</span>
                  <span>Present</span>
                  <span>25</span>
                </li>
                <li className="AttendanceList">
                  <span>ClassName</span>
                  <span>Present</span>
                  <span>25</span>
                </li>
                <li className="AttendanceList">
                  <span>ClassName</span>
                  <span>Present</span>
                  <span>25</span>
                </li>
                <li className="AttendanceList">
                  <span>ClassName</span>
                  <span>Present</span>
                  <span>25</span>
                </li>
                <li className="AttendanceList">
                  <span>ClassName</span>
                  <span>Present</span>
                  <span>25</span>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default StudentClassroom;
