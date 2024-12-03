import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../redux/actions/user";
const Sidebar = ({ routes, component: Component }) => {
    const { user } = useSelector(state => state.user)
    const location = useLocation()
    const isActive = (path) => {
        if (path === location.pathname) {
            return true
        }
        else return false
    }
    const dispatch = useDispatch()
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <section className="w-full bg-border h-screen grid grid-cols-[320px_1fr] p-[32px] gap-[16px]">

            {/* Sidebar Routes */}
            <div className="routes bg-white rounded-lg p-[16px] grid grid-rows-[72px_1fr_72px] grid-cols-1">
                <div className="logo flex items-center gap-[4px]">
                    <img className="w-[72px] h-[72px]" src={assets.logo} alt="Logo" />
                    <h2 className="text-3xl font-clemente-regular">Resourcify</h2>
                </div>

                <ul className="mt-[16px] space-y-2 flex flex-col">
                    {routes.map((r, index) => (
                        <li
                            key={index}
                            className={isActive(r.path) ? "bg-accentHover p-2 rounded-md" : "w-full hover:bg-accentHover p-2 rounded-md ease-linear duration-200 group"}
                        >
                            <Link
                                to={r.path}
                                className={isActive(r.path) ? "text-white font-gilroy-medium text-md" : "text-md text-gray-700 font-gilroy-medium group-hover:text-white"}
                            >
                                {r.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="logout-container w-full flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                        <img src="https://placehold.co/56x56" alt="" className="rounded-full object-cover object-center overflow-hidden" />

                        <div className="">
                            <p className="text-left text-md font-clemente-regular text-black">{user && user.name}</p>
                            <p className="text-sm text-left">{user && user.rollNo}</p>
                        </div>
                    </div>

                    <button onClick={logoutHandler}>
                        <IoMdLogOut className="text-2xl" />
                    </button>


                </div>
            </div>

            {/* Main Component Area */}
            <div className="component-area">
                <Component />
            </div>
        </section>
    );
};

export default Sidebar;
