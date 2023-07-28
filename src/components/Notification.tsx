import React from 'react'

const Notification = () => {
  return (
    <div className='h-12 bg-red-500 grid place-items-center text-sm md:text-base font-semibold cursor-pointer'>
      <p className='text-white py-1.5 px-4 text-center'>Free delivery for all orders over ₹500. Order your food now.</p>
    </div>
  )
}

export default Notification