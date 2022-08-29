import logout from "../../images/logout.png";
import logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const logOut = () => {
    if (props.isTeacher) {
      localStorage.removeItem("teacherInfo");
    } else {
      localStorage.removeItem("studentInfo");
    }
    navigate("/");
  };
  return (
    <header>
      <img src={logo} />
      <div className="search">
        <input type="text" name="search" placeholder="Search a Classroom" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="navName">{props.name}</div>
      <img src={logout} onClick={logOut} />
    </header>
  );
}

export default Navbar;
