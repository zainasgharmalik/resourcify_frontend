import React, { useEffect } from 'react'
import { styles } from '../../utils/selectStyles'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { getLabResources } from '../../redux/actions/lab'
import LabResource from '../../components/LabResource'

const LabResourcesListing = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.lab)
    useEffect(() => {
        dispatch(getLabResources())
    }, [])
    return (
        <section className='w-full bg-gray-100 min-h-screen'>
            <div className="title-row flex items-center justify-between">
                <h3 className='text-3xl font-clemente-regular text-black'>Lab Resources</h3>

            </div>

            <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px]">
                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>Title</span>
                    <input type="text" placeholder='Search Here' />
                </label>
                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>Publisher</span>
                    <Select styles={styles} placeholder="Filter Publisher" />
                </label>

                <label htmlFor="">
                    <span className='inline-block mb-[4px]'>OS</span>
                    <Select styles={styles} placeholder="Filter OS" />
                </label>


            </div>

            <div className="w-full grid grid-cols-4 xl:grid-cols-5 mt-[16px] gap-[16px]">
                {items &&
                    items.length > 0 &&
                    items

                        .map((i, index) => (
                            <LabResource
                                key={index}
                                image={i.image.url}
                                title={i.title}
                                status={i.status || "available"}
                                description={i.instructions}
                                id={i._id}
                            />
                        ))}
            </div>




        </section>
    )
}

export default LabResourcesListing
