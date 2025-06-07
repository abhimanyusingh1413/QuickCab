import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';


const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://heavenlywhispers.org/wp-content/uploads/2023/01/non-xq-7a_dv2gi-unsplash.jpg?w=2800)] h-screen pt-8 flex justify-between flex-col w-full'>
       <img className='w-16 ml-9' src={logo} alt="QuickCab Logo" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[28px] font-semibold'> Get Started with QuickCab</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
