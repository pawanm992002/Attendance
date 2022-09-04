import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ cardstyle, isTeacher, roomId, userId }) {
  const navigate = useNavigate();
  const [ClassDetail, setClassDetail] = useState({});
  const [Students, setStudents] = useState([]);
  const [teacherName, setTeacherName] = useState();
  const DeleteClassroom = async (e) => {
    e.stopPropagation();
    if (isTeacher) {
      await axios.delete(`/api/Teacher/Delete/classroom/${ClassDetail._id}`);
    } else {
      await axios.put(`/api/Student/leave/${userId}`, {
        RoomId: ClassDetail.RoomId,
      });
    }
  };
  useEffect(() => {
    const getTeacherById = async (teacher_id) => {
      const { data } = await axios.get(`/api/Teacher/${teacher_id}`);
      setTeacherName(data.data.Username);
    };
    const getClassroomDetail = async (roomId) => {
      const { data } = await axios.get(`/api/classroom/${roomId}`);
      setClassDetail(data.data);
      setStudents(data.data.Students);
      getTeacherById(data.data.AdminTeacherId);
    };
    getClassroomDetail(roomId);
  }, [ClassDetail]);

  const openClassroom = () => {
    if (isTeacher) {
      navigate("/teacher/classroom");
    } else {
      navigate("/student/classroom");
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
          onClick={DeleteClassroom}
        ></i>
      </h4>
      {isTeacher && (
        <h5 style={cardstyle.fieldStyle}>
          Teacher Name : <span style={{ color: "black" }}>{teacherName}</span>
        </h5>
      )}
      <h5 style={cardstyle.fieldStyle}>
        Number of Student :{" "}
        <span style={{ color: "black" }}>{Students.length}</span>
      </h5>
      <h5 style={cardstyle.IdStyle}>{ClassDetail.RoomId}</h5>
    </div>
  );
}

export default Card;
