import React from 'react'
import Select from "react-select"
import { styles } from '../../utils/selectStyles'
const DiscussionRoomBooking = () => {
  return (
    <section className='w-full h-screen bg-zinc-200'>
        <form action="">
            <label htmlFor="">
                <span>Slot</span>
                <Select placeholder="Choose Available Slot" styles={styles}/>
            </label>
            <button className='!w-full primary-btn'>Submit</button>
        </form>
    </section>
  )
}

export default DiscussionRoomBooking