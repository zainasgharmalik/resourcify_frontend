import React from 'react'

const LibraryItemBooking = () => {
    return (
        <section className='bg-zinc-200 min-h-screen'>

            <form>
                <label htmlFor="">
                    <span>Delivery Date</span>
                    <input type="date" />
                </label>
                <button className='!w-full primary-btn'>Submit</button>
            </form>
            
        </section>
    )
}

export default LibraryItemBooking
