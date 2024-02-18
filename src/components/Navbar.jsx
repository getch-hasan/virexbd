import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-blue1 py-5 px-20 rounded-b-full fixed w-full z-50'>
        <div className='flex justify-between items-center'>
            <div>
                <Link to="/"><img src={Logo} className='h-42 w-20 cursor-pointer'/></Link>
            </div>
            <div className='list-none flex '>
                <li className='mx-4'><Link className='font-semibold text-lg text-white font-poppins' to="/about">About</Link></li>
                <li className='mx-4'><Link className='font-semibold text-lg text-white font-poppins' to="#">Services</Link></li>
                <li className='mx-4'><Link className='font-semibold text-lg text-white font-poppins' to="/portfolio">Portfolio</Link></li>
                <li className='mx-4'><Link className='font-semibold text-lg text-white font-poppins' to="/contact">Contact</Link></li>
                <li className='mx-4'><Link  className=' py-2 px-6 rounded-lg font-bold text-medium text-white' style={{backgroundImage :"linear-gradient(170deg, #AC00FD 75%, #ffffff 25%)"}}>Career</Link></li>
            </div>
        </div>
    </div>
  )
}

export default Navbar