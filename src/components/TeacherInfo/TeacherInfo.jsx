import "../ClassroomsStyle.css";
import Card from "../others/Card";
import Navbar from "../others/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import teacherInfo from "../../images/teacherInfo.jpg";
import axios from "axios";
import { useState } from "react";
import ClassroomForm from "../../pages/RegisterPage/ClassroomForm";

function TeacherInfo() {
  const navigate = useNavigate();
  const [classrooms, setClassroom] = useState([]);
  const [teacherDetail, setteacherDetail] = useState({});

  useEffect(() => {
    const fetchTeacher = async () => {
      const localTeacher = JSON.parse(localStorage.getItem("teacherInfo"));
      if (!localTeacher) {
        navigate("/");
        return;
      }
      const { data } = await axios.get(`/api/Teacher/${localTeacher._id}`);
      setteacherDetail(data.data);
      setClassroom(data.data.ClassRooms);
      localStorage.setItem("teacherInfo", JSON.stringify(data.data));
    };
    fetchTeacher();
  }, [teacherDetail]);

  const cardstyle = {
    card: {
      height: "130px",
      margin: "8px 10px",
      width: "280px",
      borderRadius: "8px",
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
      textAlign: "center",
    },
    IdStyle: {
      width: "100%",
      textAlign: "end",
      marginRight: "10px",
      color: "#765D5D",
      paddingRight: "15px",
    },
  };

  return (
    <>
      <div id="ClassCont">
        <Navbar name={teacherDetail.Username} isTeacher={true} />
        <main className="classroomCont">
          <img src={teacherInfo} />
          <ClassroomForm
            isTeacher={teacherDetail.Admin}
            Id={teacherDetail._id}
          />
          <div className="classroomContent">
            {classrooms.length &&
              classrooms.map((cards) => {
                return (
                  <Card
                    key={cards}
                    roomId={cards}
                    isTeacher={teacherDetail.Admin}
                    cardstyle={cardstyle}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
}

export default TeacherInfo;
