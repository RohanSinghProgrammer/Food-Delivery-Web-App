import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='p-4 h-12 border-b-2 border-b-red-500 flex items-center justify-between'>
      {/* LOGO */}
      <Link href='/' className='text-red-500 text-lg font-semibold uppercase'>Masseno</Link>
      {/* Mobile menu */}
      <Menu />
      {/* Menu */}
    </div>
  )
}

export default Navbar