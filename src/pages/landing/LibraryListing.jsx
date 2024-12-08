import React, { useEffect } from 'react'
import Select from 'react-select'
import { styles } from '../../utils/selectStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLibraryItems } from '../../redux/actions/library'
import LibraryItem from '../../components/LibraryItem'
const LibraryListing = () => {
    const { items } = useSelector(state => state.library)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllLibraryItems())
    }, [])
    return (
        <section className='w-full bg-gray-100 min-h-screen'>
            <div className="title-row flex items-center justify-between">
                <h3 className='text-3xl font-clemente-regular text-black'>Library Items</h3>

            </div>

            <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px]">
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

            <div className="w-full grid grid-cols-4 xl:grid-cols-5 mt-[16px] gap-[16px]">
                {items &&
                    items.length > 0 &&
                    items
                        .slice(0, 5)
                        .map((i, index) => (
                            <LibraryItem
                                key={index}
                                image={i.file.url}
                                title={i.title}
                                status={i.status}
                                description={i.subtitle}
                                id={i._id}
                            />
                        ))}
            </div>




        </section>
    )
}

export default LibraryListing
