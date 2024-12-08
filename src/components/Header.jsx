import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets";

const Header = ({ isAuthenticated, user }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === location.pathname) {
      return true;
    } else return false;
  };
  return (
    <header
      className={
        (isAuthenticated && user.role === "admin") ||
          (isAuthenticated && user.role === "librarian") ||
          (isAuthenticated && user.role === "lab_attendant")
          ? "hidden"
          : "lg:px-[50px] bg-white px-[25px] lg:h-[85px] h-[80px] fixed top-0 left-0 w-full border-b border-zinc-300"
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

        <div className={isAuthenticated ? "" : "hidden"}>
          <img
            className="object-cover object-center rounded-full"
            src="https://placehold.co/56x56"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
