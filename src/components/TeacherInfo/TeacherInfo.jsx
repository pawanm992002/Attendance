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

  const [availableClassroom, setAvailableClassroom] = useState(false);
  const [classrooms, setClassroom] = useState([]);
  const [teacherName, setTeacherName] = useState("");
  const [teacherDetail, setteacherDetail] = useState({});

  const fetchTeacher = async () => {
    const localTeacher = JSON.parse(localStorage.getItem("teacherInfo"));
    if (!localTeacher) {
      navigate("/");
      return;
    }
    const { data } = await axios.get(`/api/Teacher/${localTeacher._id}`);
    setteacherDetail(data.data);
    setTeacherName(data.data.Username);
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

  const CreateClassroom = () => {
    navigate("/classroomForm");
  };
  return (
    <>
      <div id="studentInfo">
        <Navbar name={teacherName} isTeacher={true} />
        <main className="classroomCont">
          <img src={teacherInfo} />
          <ClassroomForm isTeacher={true} Id={teacherDetail._id} />
          {/* <button className="joinClass" onClick={CreateClassroom}>
            Create A Classroom
          </button> */}

          <div className="classroomContent">
            {availableClassroom &&
              classrooms.map((cards) => {
                return (
                  <Card
                    key={cards}
                    roomId={cards}
                    isTeacher={true}
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
