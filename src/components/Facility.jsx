
const Facility = ({ icon, title, description }) => {
    return (
        <div className="border border-zinc-300 p-[16px] rounded-lg">

            <div className="icon w-[64px] h-[64px] bg-accent rounded-full mb-[8px]"></div>
            <div className="text">
                <h3 className="text-2xl font-clemente-regular line-clamp-1">{title}</h3>
                <p className="line-clamp-2">{description}</p>
            </div>

        </div>
    )
}

export default Facility
