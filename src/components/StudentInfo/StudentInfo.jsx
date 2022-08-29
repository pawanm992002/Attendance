import "./StudentInfo.css";
import idea from "../../images/idea.jpg";
import Card from "../others/Card";
import Navbar from "../others/Navbar";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentInfo() {
  const cardstyle = {
    card: {
      height: "150px",
      margin: "8px 10px",
      width: "280px",
    },
    nameStyle: {
      width: "100%",
      color: "#765D5D",
      textAlign: "center",
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "30px",
      fontWeight: "bolder",
    },
    fieldStyle: {
      width: "100%",
    },
    IdStyle: {
      width: "100%",
      textAlign: "end",
      marginRight: "10px",
    },
  };
  const navigate = useNavigate();

  const openClassroom = () => {
    console.log("jldjk");
  };
  const name = "Pawan mishra";
  const detail = {
    classroomName: "toc",
    teacherName: "vinesh",
    noOfStudent: 50,
    roomId: "216115212112",
    isTeacher: false,
  };
  return (
    <div id="studentInfo">
      <Navbar name={name} isTeacher={false} />
      <main className="classroomCont">
        <img src={idea} />

        <button className="joinClass">Join A Classroom</button>

        <div className="classroomContent">
          <Card detail={detail} cardstyle={cardstyle} />
          <Card detail={detail} cardstyle={cardstyle} />
          <Card detail={detail} cardstyle={cardstyle} />
        </div>
      </main>
    </div>
  );
}

export default StudentInfo;
