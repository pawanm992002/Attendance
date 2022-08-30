import axios from "axios";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export default function ClassroomForm({ Id, isTeacher }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState({
    classroomName: "",
    classroomId: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const JoinClassroomHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/Student/${Id}`, {
        RoomId: input.classroomId,
      });
      alert(data.msg);
      if (data.status) {
        navigate("/student");
      }
    } catch (err) {
      alert("something went wrong");
    }
  };
  const CreateClassroom = async (e) => {
    e.preventDefault();
    const { classroomName, classroomId } = input;
    if (!classroomName || !classroomId) {
      alert("please fill all the fields");
      return;
    }
    try {
      //   const { _id } = JSON.parse(localStorage.getItem("teacherInfo"));
      const { data } = await axios.post(
        `/api/classroom/${Id}`,
        {
          RoomId: classroomId,
          name: classroomName,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      alert(data.msg);
      if (data.status) {
        navigate("/teacher");
        return;
      }
    } catch (err) {
      alert("Something went wrong");
      return;
    }
  };

  return (
    <div>
      <button className="joinClass" onClick={handleOpen}>
        {isTeacher ? "Create A Classroom" : "Join A Classroom"}
      </button>
      {isTeacher ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form className="form" onSubmit={CreateClassroom} method="post">
            <h2>Create Classroom</h2>
            <input
              className="input"
              type="text"
              name="classroomName"
              value={input.classroomName}
              onChange={changeHandler}
              placeholder="ClassRoom Name"
              required
            />
            <input
              className="input"
              type="text"
              name="classroomId"
              value={input.classroomId}
              onChange={changeHandler}
              placeholder="Classroom ID"
              required
            />

            <input type="submit" value="Join It" className="btn" />
          </form>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form className="form" onSubmit={JoinClassroomHandler} method="post">
            <h2>Join Classroom</h2>
            <input
              className="input"
              type="text"
              name="classroomId"
              value={input.classroomId}
              onChange={changeHandler}
              placeholder="Classroom ID"
              required
            />

            <input type="submit" value="Join It" className="btn" />
          </form>
        </Modal>
      )}
    </div>
  );
}
