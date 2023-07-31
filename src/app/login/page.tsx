import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='p-4 h-[calc(100vh-9rem)] md:h-[calc(100vh-11rem)] flex flex-col md:flex-row justify-center items-center'>
      {/* BOX */}
      <div className=" h-full w-full md:h-[60vh] md:w-[80vw] lg:w-[60vw] flex flex-col md:flex-row rounded-md shadow-2xl overflow-hidden">
        {/* IMAGE */}
        <div className="relative h-1/3 w-full md:h-full">
          <Image src={'/loginBg.png'} alt='...' fill className='object-cover' />
        </div>
        {/* FORM */}
        <div className=" flex flex-col w-full h-2/3 md:h-full space-y-5 p-4 md:p-8 lg:p-12">
          <h2 className='text-2xl font-bold'>Welcome</h2>
          <p className='text-sm'>Log into your account or create one  using social buttons</p>
          {/* LOGIN WITH GOOGLE */}
          <button className="w-full p-2 rounded-md border border-orange-200 flex items-center space-x-4">
            <Image src={'/google.png'} alt='...' width={20} height={20} className='object-contain' />
            <p>Sign in with Google</p>
          </button>
          {/* LOGIN WITH FB */}
          <button className="w-full p-2 rounded-md border border-blue-200 flex items-center space-x-4">
            <Image src={'/facebook.png'} alt='...' width={20} height={20} className='object-contain' />
            <p>Sign in with Facebook</p>
          </button>
          {/* TROUBLESHOOT */}
          <p className='text-sm'>Have a problem? <Link href={'/'} className='cursor-pointer underline'>Contact us</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login