import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ cardstyle, isTeacher, roomId }) {
  const [ClassDetail, setClassDetail] = useState({});
  const [noOfStudent, setnoOfStudent] = useState();
  const getClassroomDetail = async (roomId) => {
    const { data } = await axios.get(`/api/classroom/${roomId}`);
    setnoOfStudent(data.data.Students.length);
    setClassDetail(data.data);
  };
  useEffect(() => {
    getClassroomDetail(roomId);
  }, []);
  const navigate = useNavigate();
  const openClassroom = () => {
    if (isTeacher) {
      navigate("/teacher/classroom");
    }
  };
  return (
    <div className="classroom" style={cardstyle.card} onClick={openClassroom}>
      <h4 style={cardstyle.nameStyle}>
        {ClassDetail.RoomName}
        <i
          style={{
            color: "red",
            float: "right",
            padding: "15px 10px",
          }}
          className="fa-solid fa-trash"
        ></i>
      </h4>
      <h5 style={cardstyle.fieldStyle}>
        Number of Student :{" "}
        <span style={{ color: "black" }}>{noOfStudent}</span>
      </h5>
      <h5 style={cardstyle.IdStyle}>{ClassDetail.RoomId}</h5>
    </div>
  );
}

export default Card;
