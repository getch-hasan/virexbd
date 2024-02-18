import React from 'react'
import client from"../../assets/client.png"
import man from "../../assets/man.png"
import Review from './Review'

const Client = () => {
  const reviewData =[
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:3,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:4,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:4,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:5,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:5,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:3,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team. It has been a great experience working with the VirexBD team!",
      rating:2,
    },
    {
      name:"Loh Lee Yng",
      img:man,
      des:"Finance Manager",
      review:"It has been a great experience working with the VirexBD team!",
      rating:1,
    },
  ]

  return (
    <div className='flex'>
        <div className='w-6/12'>
            <img src={client} className='mx-auto'/>
            <p style={{marginTop:"-30px"}} className='text-center font-poppins font-bold text-3xl text-white'>What Our Client Says</p>
        </div>
        <div style={{height:"500px"}} className='w-6/12 overflow-y-scroll rounded-lg px-8 bg-gray2'>
        
          {reviewData.map((val, ind)=>{
            return <Review key={ind} val={val}/>
          })}

            
        </div>
 </div>
  )
}

export default Client