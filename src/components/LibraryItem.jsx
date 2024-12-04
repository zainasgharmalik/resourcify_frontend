import { Link } from "react-router-dom"

const LibraryItem = ({ image, title, status, description, id }) => {
    return (
        <div className='w-full border bg-white border-zinc-300 p-[16px] flex flex-col rounded-lg'>
            <img src={image} alt="" className="w-full h-[250px] object-cover object-center mb-[8px] rounded-md" />
            <div className="flex items-center justify-between mb-[4px]">
                <h3 className="text-xl font-clemente-regular line-clamp-1">{title}</h3>
                <span className={status === "available" ? "bg-green-200 px-3 py-1.5 rounded-full text-green-800" : "bg-red-200 px-3 py-1.5 rounded-full text-red-800"}>{status}</span>
            </div>
            <p className="mb-[8px]">{description}</p>
            <Link className="primary-btn !w-full" to={`/library/${id}/lend`}>Lend Now</Link>
        </div>
    )
}

export default LibraryItem
