import React from 'react'
import ReactStars from "react-rating-stars-component";

const Review = ({val}) => {
  return (
    <div className='bg-blue3 flex justify-center mb-3 rounded-md py-2'>
       <div className='w-9/12'>
            <div className='flex'>
                <img className='h-10 w-10 rounded-full' src={val.img}/>
                <div className='font-poppins ml-4'>
                    <h1 className='text-md font-semibold'>{val.name}</h1>
                    <p className='text-xs'>{val.des}</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='font-poppins'>{val.review}</p>
                <p>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={val.rating}
                        edit={false}
                    />
                </p>
            </div>
        </div>
    </div>
  )
}

export default Review