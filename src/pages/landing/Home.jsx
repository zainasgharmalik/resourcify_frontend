import { Link } from "react-router-dom"
import { assets } from "../../assets"
import Facilities from "./Facilities"
import FeaturedLibraryItems from "./FeaturedLibraryItems"

const Home = () => {
    return (
        <>
            <section className="w-full h-screen flex flex-col ">
                <div className="text-container flex flex-col gap-[16px] items-center">
                    <div>
                        <h1>Streamline Your Library and Lab <br /> Experience with Resourcify</h1>
                        <p className="mt-[8px] text-center">Discover, Book, and Manage Resources Effortlessly – All in One Place.</p>
                    </div>

                    <div className="btns-row flex gap-[8px]">
                        <Link className="primary-btn" to={'/'}>Join Now</Link>
                        <Link className="secondary-btn" to={'/'}>Contact</Link>
                    </div>
                </div>

                <div className="images-container grid md:grid-cols-3 grid-cols-1 mt-[32px] gap-[16px] h-full overflow-hidden">
                    {[assets.library_home, assets.lab_resources_home, assets.discussion_room_home].map((i, index) => (
                        <img key={index} src={i} alt="" className="lg:h-full h-[200px] rounded-lg object-cover object-center overflow-hidden w-full" />
                    ))}

                </div>
            </section>

            <Facilities />
            <FeaturedLibraryItems />
        </>
    )
}

export default Home
