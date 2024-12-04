import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user";
import { assets } from "../assets";

const Sidebar = ({ routes, component: Component }) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const [expandedRoutes, setExpandedRoutes] = useState({}); // Tracks expanded routes
    const dispatch = useDispatch();

    const isActive = (path) => location.pathname === path;

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const toggleExpand = (index) => {
        setExpandedRoutes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

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
                        <li key={index} className="w-full">
                            <div
                                className={`flex items-center justify-between rounded-md ${isActive(r.value) ? "bg-accentHover text-white p-2" : "hover:bg-accentHover hover:duration-150 hover:text-white hover:p-2 text-gray-700"
                                    } group`}
                                onClick={() => r.isExtendAble && toggleExpand(index)}
                            >
                                <Link
                                    to={r.value}
                                    className="font-gilroy-medium text-md flex-grow"
                                >
                                    {r.label}
                                </Link>
                                {r.isExtendAble && (
                                    <span>
                                        {expandedRoutes[index] ? (
                                            <FaChevronDown className="transition-transform duration-300" />
                                        ) : (
                                            <FaChevronRight className="transition-transform duration-300 rotate-360" />
                                        )}
                                    </span>
                                )}
                            </div>
                            {r.isExtendAble && expandedRoutes[index] && (
                                <ul className="ml-6 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                                    {r.subRoutes.map((subRoute, subIndex) => (
                                        <li key={subIndex}>
                                            <Link
                                                to={subRoute.value}
                                                className={`block rounded-md ${isActive(subRoute.value)
                                                    ? "bg-accentHover text-white p-2 font-gilroy-medium "
                                                    : "hover:bg-accentHover text-gray-700 hover:text-white font-gilroy-medium hover:p-2 hover:duration-150"
                                                    }`}
                                            >
                                                {subRoute.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="logout-container w-full flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                        <img
                            src="https://placehold.co/56x56"
                            alt=""
                            className="rounded-full object-cover object-center overflow-hidden"
                        />
                        <div className="">
                            <p className="text-left text-md font-clemente-regular text-black">
                                {user && user.name}
                            </p>
                            <p className="text-sm text-left">
                                {user && user.rollNo}
                            </p>
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
