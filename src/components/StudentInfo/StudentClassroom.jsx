import StudentNav from "../others/StudentNav";
import "./StudentInfo.css";
import classroomPic from "../../images/classroom.jpg";

function StudentClassroom() {
  return (
    <>
      <StudentNav />
      <div className="studentClassroom">
        <img src={classroomPic} />
        <aside className="asideClassroom">
          <div>classroom 1</div>
          <div>classroom 2</div>
          <div>classroom 3</div>
          <div>classroom 4</div>
        </aside>
        <main className="mainClassroom">
          <div className="box1">
            <div>Total Attendance</div>
            <div>Total Attendance</div>
          </div>
          <div className="box2">
            <div>Classroom Name</div>
            <div>Classroom Code</div>
          </div>
          <div className="box3">
            <button>Scan Code for Classroom</button>
            <button>Leave Classroom</button>
          </div>
          <div className="box4">Attendance Table</div>
        </main>
      </div>
    </>
  );
}

export default StudentClassroom;
