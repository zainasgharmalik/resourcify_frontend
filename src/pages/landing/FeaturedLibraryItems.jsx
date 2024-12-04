import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllLibraryItems } from "../../redux/actions/library"
import LibraryItem from "../../components/LibraryItem"

const FeaturedLibraryItems = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.library)
    useEffect(() => {
        dispatch(getAllLibraryItems())
    }, [])
    return (
        <section className="sec-section w-full flex flex-col">
            <div className="row flex justify-between items-center">
                <h2>Library Items</h2>
            </div>

            <div className="w-full grid grid-cols-5 mt-[16px] gap-[16px]">
                {items && items.length > 0 && items.map((i, index) =>
                    <LibraryItem key={index} image={i.file.url} title={i.title} status={i.status} description={i.subtitle} id={i._id} />
                    
                )}
            </div>
        </section>
    )
}

export default FeaturedLibraryItems
