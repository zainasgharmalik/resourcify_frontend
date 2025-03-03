import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createLendLabResourceRequest } from '../../redux/actions/lab'
import { useParams } from 'react-router-dom'
import Loading from '../other/Loading'
import { useAlert } from '../../utils/alert'

const LabResourceBooking = () => {

    const [purpose, setPurpose] = useState("")
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading, error, message } = useSelector(state => state.lab)

    const submitHandler = () => {
        dispatch(createLendLabResourceRequest(id, purpose))
    }
    const alert = useAlert()

    useEffect(() => {
        alert(message, error, "/")
    }, [message, error])
    return (
        loading ? <Loading /> : <section className='bg-zinc-200 min-h-screen'>

            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    <span>Purpose</span>
                    <textarea value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="Write a proper purpose" className='!h-[150px]' type="text"></textarea>
                </label>
                <button className='!w-full primary-btn'>Submit</button>
            </form>

        </section>
    )
}

export default LabResourceBooking
