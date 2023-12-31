import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "info",
          title: "You Have Logged Out!",
        });
      })
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/booking">My College</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="h-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div>
          {/* <button className="btn btn-ghost btn-xs">{user.displayName}</button> */}
          <a className="link link-accent mx-2">{user.displayName}</a>
          </div>
            <button onClick={handleLogOut} className="btn btn-accent btn-sm">
              logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-accent btn-sm ">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
