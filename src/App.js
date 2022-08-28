import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/RegisterPage/Student";
import Teacher from "./pages/RegisterPage/Teacher";
import TeacherInfo from "./components/TeacherInfo/TeacherInfo";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import StudentClassroom from "./components/StudentInfo/StudentClassroom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/studentInfo" element={<StudentInfo />} />
          <Route path="/student/classroom" element={<StudentClassroom />} />

          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacherInfo" element={<TeacherInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
