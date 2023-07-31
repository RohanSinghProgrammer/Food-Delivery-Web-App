import React from 'react'

const Orders = () => {
  return (
    <div className='p-4 min-h-[calc(100vh-9rem)] md:min-h-[calc(100vh-11rem)]'>
      <table className='w-full h-full border-separate border-spacing-2'>
        <thead>
          <tr className='font-bold text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-red-50 px-2'>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>1236547890</td>
            <td className='text-sm md:text-base py-4 px-1'>1.08.2023</td>
            <td className='text-sm md:text-base py-4 px-1'>₹655</td>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>Big Burger ( 2 ), Veg pizza ( 1 )</td>
            <td className='text-sm md:text-base py-4 px-1'>On the way (approx 10min)...</td>
          </tr>
          <tr className='px-2 odd:bg-gray-50'>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>1236547890</td>
            <td className='text-sm md:text-base py-4 px-1'>1.08.2023</td>
            <td className='text-sm md:text-base py-4 px-1'>₹655</td>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>Big Burger ( 2 ), Veg pizza ( 1 )</td>
            <td className='text-sm md:text-base py-4 px-1'>On the way (approx 10min)...</td>
          </tr>
          <tr className='px-2 odd:bg-gray-50'>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>1236547890</td>
            <td className='text-sm md:text-base py-4 px-1'>1.08.2023</td>
            <td className='text-sm md:text-base py-4 px-1'>₹655</td>
            <td className='text-sm md:text-base py-4 px-1 hidden md:block'>Big Burger ( 2 ), Veg pizza ( 1 )</td>
            <td className='text-sm md:text-base py-4 px-1'>On the way (approx 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders