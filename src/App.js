import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherInfo from "./components/TeacherInfo/TeacherInfo";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import StudentClassroom from "./components/StudentInfo/StudentClassroom";

import TeacherClassroom from "./components/TeacherInfo/TeacherClassroom";
import Auth from "./pages/authrization/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/student" element={<StudentInfo />} />
          <Route path="/student/classroom" element={<StudentClassroom />} />

          <Route path="/teacher" element={<TeacherInfo />} />
          <Route path="/teacher/classroom" element={<TeacherClassroom />} />

          {/* <Route path="/classroomForm" element={<Classroom />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
