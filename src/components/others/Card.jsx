import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ cardstyle, detail, roomId }) {
  const navigate = useNavigate();
  const { classroomName, teacherName, noOfStudent } = detail;
  const openClassroom = () => {
    if (detail.isTeacher) {
      navigate("/teacher/teacherInfo");
    }
  };
  return (
    <div className="classroom" style={cardstyle.card} onClick={openClassroom}>
      <h4 style={cardstyle.nameStyle}>
        {classroomName}
        <i
          style={{
            color: "red",
            float: "right",
            padding: "15px 10px",
          }}
          className="fa-solid fa-trash"
        ></i>
      </h4>
      <h4 style={cardstyle.fieldStyle}>
        Teacher Name :<span style={{ color: "black" }}> {teacherName}</span>
      </h4>
      <h5 style={cardstyle.fieldStyle}>
        Number of Student :<span style={{ color: "black" }}>{noOfStudent}</span>{" "}
      </h5>
      <h5 style={cardstyle.IdStyle}>
        <span style={{ color: "black" }}>{roomId} </span>
      </h5>
    </div>
  );
}

export default Card;
// innerHeight,widht border-radius,
