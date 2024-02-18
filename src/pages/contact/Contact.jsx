import React from 'react'
import one from "../../assets/address/one.png"
import two from "../../assets/address/two.png"
import three from "../../assets/address/three.png"
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

import first from "../../assets/social/first.png"
import second from "../../assets/social/second.png"
import third from "../../assets/social/third.png"
import four from "../../assets/social/four.png"
import five from "../../assets/social/five.png"


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {



  //Google MAP
  const defaultProps = {
    center: {
      lat: 23.8746,
      lng: 90.3888
    },
    zoom: 13
  };

  //Handle Submit
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className=' px-20 py-32 '>
      <div className='flex justify-between'>
          <div className='w-4/12'>
            <div style={{ height: '50vh', width: '100%', borderRadius:"30%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA6IELrAzDC0cdO5Ye0xVFuudXEZZuOmzc" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={23.8746}
                      lng={90.3888}
                      text=""
                    />
                  </GoogleMapReact>
            </div>
          <div className='bg-white  px-8 py-8 mt-5 rounded-lg'>
            <div className='leading-9'>
              <div className='flex items-center'>
                <img className='w-6 h-6 mr-3' src={one}/>
                <p className='font-poppins text-md'>Uttara, Dhaka</p>
              </div>
              <div className='flex items-center'>
                <img className='w-6 h-6 mr-3' src={two}/>
                <p className='font-poppins text-md'>Mobile: 01709955555</p>
              </div>
              <div className='flex items-center'>
                <img className='w-6 h-6 mr-3' src={three}/>
                <p className='font-poppins text-md'>Email: dhaka@gmail.com</p>
              </div>
            </div>
            <div className='flex list-none mt-5'>
              <li className='mr-3'><Link className=' bg-purple2 block flex items-center justify-center px-3  py-2 rounded-sm'><img className='w-4' src={first}/></Link></li>
              <li className='mr-3'><Link className=' bg-purple2 block flex items-center justify-center px-3  py-2 rounded-sm'><img className='w-4' src={second}/></Link></li>
              <li className='mr-3'><Link className=' bg-purple2 block flex items-center justify-center px-3  py-2 rounded-sm'><img className='w-4' src={third}/></Link></li>
              <li className='mr-3'><Link className=' bg-purple2 block flex items-center justify-center px-3  py-2 rounded-sm'><img className='w-4' src={four}/></Link></li>
              <li className='mr-3'><Link className=' bg-purple2 block flex items-center justify-center px-3  py-2 rounded-sm'><img className='w-4' src={five}/></Link></li>

            </div>
          </div>
        </div>
        <div className='w-7/12 '>
          <h1 className='text-white font-poppins font-semibold'>Leave Message</h1>
          <form className='mt-5' onSubmit={handleSubmit}>
            <div className='flex justify-between'>
              <input style={{background:"none", border:"1px solid white"}} placeholder='Name' className='py-1 px-2 font-poppins rounded-md w-6/12 mr-2 text-white' type='text' required/>
              <input style={{background:"none", border:"1px solid white"}} placeholder='Email' className='py-1 px-2 font-poppins rounded-md w-6/12 text-white' type='email' required/>
            </div>
            <div className='flex justify-between mt-5'> 
              <input style={{background:"none", border:"1px solid white"}} placeholder='Phone' className='py-1 px-2 font-poppins rounded-md w-6/12 mr-2 text-white' type='text' required/>
              <input style={{background:"none", border:"1px solid white"}} placeholder='Subject' className='py-1 px-2 font-poppins rounded-md w-6/12 text-white' type='text' required/>
            </div>
            <textarea style={{background:"none", border:"1px solid white"}} className='w-full mt-5 px-1 rounded-md text-white' rows={10} placeholder='Message '></textarea>
            <button className=' bg-purple2 font-poppins font-medium text-xs px-5 py-3 rounded-md mt-5 text-white'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact