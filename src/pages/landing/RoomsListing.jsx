import Select from "react-select"
import { styles } from "../../utils/selectStyles"
import DiscussionRoom from "../../components/DiscussionRoom"
import { assets } from "../../assets"
const RoomsListing = () => {
    return (
        <section className="w-full bg-gray-100 min-h-screen">
            <div className="title-row flex items-center justify-between">
                <h3 className='text-3xl font-clemente-regular text-black'>Discussion Rooms</h3>

            </div>
            <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px] ">
                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>Title</span>
                    <input type="text" placeholder='Search Here' />
                </label>
                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>Resource Type</span>
                    <Select styles={styles} placeholder="Filter Category" />
                </label>

                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>Status</span>
                    <Select styles={styles} placeholder="Filter Status" />
                </label>

            </div>



            <div className="w-full grid grid-cols-4 xl:grid-cols-6 mt-[16px] gap-[16px]">
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />

                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
                <DiscussionRoom image={assets.discussion_room_home} title={"Room Title"} />
            </div>

        </section>
    )
}

export default RoomsListing
