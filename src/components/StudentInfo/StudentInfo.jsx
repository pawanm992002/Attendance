import "./StudentInfo.css";
import idea from "../../images/idea.jpg";
import Card from "../others/Card";
import StudentNav from "../others/StudentNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentInfo() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/student/studentInfo");
  });
  const openClassroom = () => {
    console.log("jldjk");
  };
  return (
    <div id="studentInfo">
      <StudentNav />
      <main className="classroomCont">
        <img src={idea} />

        <button className="joinClass">Join A Classroom</button>

        <div className="classroomContent">
          <Card />
        </div>
      </main>
    </div>
  );
}

export default StudentInfo;
