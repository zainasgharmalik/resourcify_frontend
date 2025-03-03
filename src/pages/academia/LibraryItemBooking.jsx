import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../other/Loading'
import { createLendItemsRequest } from '../../redux/actions/library'
import { useParams } from 'react-router-dom'
import { useAlert } from '../../utils/alert'

const LibraryItemBooking = () => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading, error, message } = useSelector(state => state.library)
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createLendItemsRequest(id, startDate, endDate))
    }
    const alert = useAlert()
    useEffect(() => {
        alert(message, error, "/library")
    }, [message, error])
    return (
        loading ? <Loading /> : <section className='bg-zinc-200 min-h-screen'>

            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    <span>Start Date</span>
                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" />
                </label>

                <label htmlFor="">
                    <span>End Date</span>
                    <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" />
                </label>
                <button className='!w-full primary-btn'>Submit</button>
            </form>

        </section>
    )
}

export default LibraryItemBooking
