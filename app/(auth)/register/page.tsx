import Image from 'next/image'
import React from 'react'

const Register = () => {
  return (
    <main className='h-screen bg-slate-100 font-serif flex justify-between p-4 gap-4'>
      <div className='bg-slate-900 w-[50%]'>Left</div>
      <div className='bg-slate-100 w-[50%]'>
        <div className='h-full relative rounded-lg'>
          <div className='absolute z-10 flex items-end justify-center mb-4 p-4 pb-12 text-center text-white w-[100%] h-[100%]'>
            <h4 className='text-4xl font-semibold'>Discovering the Best Resource to Manage Your Finances</h4>
          </div>
          <Image
            src={"/images/register.jpg"}
            alt='Register'
            sizes='100vw'
            width={0}
            height={0}
            className='w-full h-full object-cover rounded-lg clip-polygon'
            title='https://unsplash.com/photos/a-person-is-holding-a-wallet-with-money-in-it-w6tt6bFpKMA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
          />
        </div>
      </div>
    </main>
  )
}

export default Register
