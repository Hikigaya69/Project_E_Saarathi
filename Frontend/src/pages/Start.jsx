import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1609876634057-3e5c88f27487?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmlvdHxlbnwwfHwwfHx8MA%3D%3D')] h-screen pt-8 flex justify-between flex-col w-full">

        <img className='w-16 ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnqDUn0ubi54ixCOMdpGcQzulVfio-qqlDA&s" alt="" />
        <div className='bg-white  pb-7 py-4 px-4' >
          <h2 className='text-3xl font-bold'>
            Get Started with E-Saarathi
          </h2>
          <Link to='/UserLogin'className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>

      </div>
    </div>
  )
}
export default Start
