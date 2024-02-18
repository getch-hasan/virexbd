import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
        <>
            <div className='w-full  pt-16 px-20'>
            <div className='flex justify-between'>
                <div className='w-5/12 mt-10'>
                    <img src={logo} className='h-8 w-15'/>
                    <p className='mt-5 mr-5 text-white font-poppins font-normal text-sm'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className='w-2/12 list-none'>
                    <h1 className='text-white text-lg font-medium'>Features</h1>
                    <div className='font-poppins font-normal leading-6 mt-5 text-sm text-white'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Career</li>
                </div>
            </div>
            <div className='w-2/12 list-none'>
                <h1 className='text-white text-lg font-medium'>Products</h1>
                <div className='font-poppins font-normal leading-6 mt-5 text-sm text-white'>
                    <li>Task Management</li>
                    <li>Company growth</li>
                    <li>Time tracking</li>
                </div>
            </div>
            <div className='w-2/12 list-none'>
                <h1 className='text-white text-lg font-medium'>Support</h1>
                <div className='font-poppins font-normal leading-6 mt-5 text-sm text-white'>
                    <li>Customer service</li>
                    <li>Accessibility</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                    <li>Terms & condition</li>

                </div>
            </div>
                </div>
                
            </div>
        <div className='w-full  mt-7 text-center py-2 text-white font-poppins'>
        <p>2024	&copy; All rights reserved by Virex BD Ltd.</p>
    </div>
    </>
  )
}

export default Footer