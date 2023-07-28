import Image from 'next/image'
import React from 'react'

const CartIcon = () => {
  return (
    <div className='flex space-x-4'>
        <Image src={'/cart.png'} alt={''} width={30} height={30} />
        <p className='text-3xl text-white'>CART ( 3 )</p>
    </div>
  )
}

export default CartIcon