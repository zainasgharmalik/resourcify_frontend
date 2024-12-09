import React from 'react'

const LabResourceBooking = () => {
    return (
        <section className='bg-zinc-200 min-h-screen'>

            <form>
                <label htmlFor="">
                    <span>Purpose</span>
                    <textarea placeholder="Write a proper purpose" className='!h-[150px]' type="text"></textarea>
                </label>
                <button className='!w-full primary-btn'>Submit</button>
            </form>
            
        </section>
    )
}

export default LabResourceBooking
