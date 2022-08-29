import Card from "../others/Card";
import Navbar from "../others/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import teacherInfo from "../../images/teacherInfo.jpg";
import axios from "axios";
import { useState } from "react";

function TeacherInfo() {
  const navigate = useNavigate();

  const [availableClassroom, setAvailableClassroom] = useState(false);
  const [classrooms, setClassroom] = useState([]);
  const [teacherName, setTeacherName] = useState("");

  const fetchTeacher = async () => {
    const localTeacher = JSON.parse(localStorage.getItem("teacherInfo"));
    const { data } = await axios.get(`/api/Teacher/${localTeacher._id}`);
    setTeacherName(data.data.Username);
    // console.log(data.data.ClassRooms);
    if (data.data.ClassRooms.length) {
      setClassroom(data.data.ClassRooms);
      setAvailableClassroom(true);
    }
    localStorage.setItem("teacherInfo", JSON.stringify(data.data));
  };
  useEffect(() => {
    fetchTeacher();
  }, []);
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

  const openClassroom = () => {
    console.log("jldjk");
  };
  const detail = {
    classroomName: "toc",
    teacherName: teacherName,
    noOfStudent: 50,
    isTeacher: true,
  };
  const CreateClassroom = () => {
    navigate("/classroomForm");
  };
  return (
    <>
      <div id="studentInfo">
        <Navbar name={teacherName} isTeacher={true} />
        <main className="classroomCont">
          <img src={teacherInfo} />

          <button className="joinClass" onClick={CreateClassroom}>
            Create A Classroom
          </button>

          <div className="classroomContent">
            {classrooms.map((cards) => {
              return (
                <Card
                  key={cards}
                  roomId={cards}
                  detail={detail}
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
