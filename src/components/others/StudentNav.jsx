import logout from "../../images/logout.png";
import logo from "../../images/logo.jpg";

function StudentNav() {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="search">
        <input type="text" name="search" placeholder="Search a Classroom" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <img src={logout} alt="" />
    </header>
  );
}

export default StudentNav;
