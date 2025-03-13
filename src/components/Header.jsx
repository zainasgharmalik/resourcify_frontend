import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/user";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
const Header = ({ isAuthenticated, user }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const isActive = (path) => {
    if (path === location.pathname) {
      return true;
    } else return false;
  };

  const dispatch = useDispatch()
  return (
    <header
      className={
        (isAuthenticated && user.role === "admin") ||
          (isAuthenticated && user.role === "librarian") ||
          (isAuthenticated && user.role === "lab_attendant")
          ? "hidden"
          : "lg:px-[50px] bg-white px-[25px] lg:h-[85px] h-[80px] fixed top-0 left-0 w-full border-b border-zinc-300 z-50"
      }
    >
      <nav className="flex items-center justify-between w-full h-full bg-white">
        <div className="logo h-full flex items-center gap-[8px]">
          <img className="w-[64px] h-[64px]" src={assets.logo} alt="" />
          <h2 className="text-2xl font-clemente-regular">Resourcify</h2>
        </div>

        <div className="links  gap-[16px] lg:flex hidden">
          {[
            { path: "/", label: "Home" },
            { path: "/library", label: "Library" },
            { path: "/lab-resources", label: "Lab Resources" },
            { path: "/discussion-rooms", label: "Discussion Rooms" },
          ].map((l, index) => (
            <Link
              className={`text-md ${isActive(l.path)
                ? "text-accent font-gilroy-semibold"
                : "text-text font-gilroy-medium"
                } hover:text-black hover:duration-200 hover:ease-in`}
              key={index}
              to={l.path}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className={isAuthenticated ? "hidden" : "flex gap-[8px] items-center"} >
          <Link to={"/login"} className="inline-block primary-btn !w-auto">
            Academia Login
          </Link>
          <Link to={"/login/coordinator"} className="inline-block primary-btn !w-auto !bg-black">
            Coordinators Login
          </Link>
        </div>

        <div className={`${isAuthenticated ? "" : "hidden"} flex items-center gap-[8px]`}>
          <div className="flex items-center gap-2">
            <img
              className="object-cover object-center rounded-full"
              src="https://placehold.co/56x56"
              alt=""
            />

            <button>
              <IoIosArrowDown className={`font-[600] text-lg ${visible ? "rotate-180" : ""}`} onClick={() => setVisible(!visible)} />
            </button>
          </div>

          <div className={`${visible ? "w-[250px] bg-white border border-zinc-200 p-4 rounded-md absolute top-[100px] right-[50px] flex flex-col gap-2" : "hidden"}`}>
            <Link to={`/me`} className="w-full  p-2 flex gap-2 rounded-md items-center hover:bg-zinc-200">
              <span><FaRegUser /></span>
              <span>Profile</span>
            </Link>

            

            <Link to={`/my-requests`} className="w-full  p-2 flex gap-2 rounded-md items-center hover:bg-zinc-200">
              <span><FaRegUser /></span>
              <span>My Requests</span>
            </Link>
            <button className="primary-btn !p-2 !w-full" onClick={() => { dispatch(logout()) }}>Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
