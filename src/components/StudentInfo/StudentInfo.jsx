import "../ClassroomsStyle.css";
import idea from "../../images/idea.jpg";
import Card from "../others/Card";
import Navbar from "../others/Navbar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClassroomForm from "../../pages/RegisterPage/ClassroomForm";

function StudentInfo() {
  const [studentDetail, setstudentDetail] = useState({});
  const [Classrooms, setClassrooms] = useState([]);
  const fetchStudent = async () => {
    const localStudent = JSON.parse(localStorage.getItem("studentInfo"));
    if (!localStudent) {
      navigate("/");
    }
    const { data } = await axios.get(`/api/Student/${localStudent._id}`);
    setstudentDetail(data.data);
    setClassrooms(data.data.ClassRooms);
    localStorage.setItem("studentInfo", JSON.stringify(data.data));
  };

  useEffect(() => {
    fetchStudent();
  }, [studentDetail]);

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
  const navigate = useNavigate();

  return (
    <div id="ClassCont">
      <Navbar name={studentDetail.Username} isTeacher={studentDetail.Admin} />
      <main className="classroomCont">
        <img src={idea} />
        <ClassroomForm isTeacher={studentDetail.Admin} Id={studentDetail._id} />
        <div className="classroomContent">
          {Classrooms.length ? (
            Classrooms.map((ClassroomId) => {
              return (
                <Card
                  key={ClassroomId}
                  roomId={ClassroomId}
                  userId={studentDetail._id}
                  isTeacher={studentDetail.Admin}
                  cardstyle={cardstyle}
                />
              );
            })
          ) : (
            <div className="classroom"> NO Clasroom found </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default StudentInfo;
