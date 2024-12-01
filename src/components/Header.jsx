import { Link, useLocation } from "react-router-dom"
import { assets } from "../assets"

const Header = () => {
    const location = useLocation()

    const isActive = (path) => {
        if (path === location.pathname) {
            return true
        }
        else return false
    }


    return (
        <header className="lg:px-[50px] px-[25px] py-[16px] lg:h-[100px] h-[80px] fixed top-0 left-0  w-full">
            <nav className="w-full h-full border-b border-zinc-200 pb-[8px] flex items-center justify-between bg-white">

                <div className="logo h-full flex items-center gap-[8px]">
                    <img className="h-full" src={assets.logo} alt="" />
                    <h2 className="text-2xl font-clemente-regular">Resourcify</h2>
                </div>

                <div className="links  gap-[16px] lg:flex hidden">
                    {[{ path: "/", label: "Home" }, { path: "/library", label: "Library" }, { path: "/lab-resources", label: "Lab Resources" }, { path: "/discussion-rooms", label: "Discussion Rooms" }].map((l, index) => (
                        <Link className={`text-md ${isActive(l.path) ? "text-accent font-gilroy-semibold" : "text-text font-gilroy-medium"} hover:text-black hover:duration-200 hover:ease-in`} key={index} to={l.path}>{l.label}</Link>
                    ))}
                </div>

                <div>
                    <Link className="primary-btn inline-block">Login</Link>
                </div>



            </nav>
        </header>
    )
}

export default Header
