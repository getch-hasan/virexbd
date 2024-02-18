import React from 'react'
import first from "../../assets/New folder/first.png"
import second from "../../assets/New folder/second.png"
import third from "../../assets/New folder/third.png"
import four from "../../assets/New folder/four.png"
import five from "../../assets/New folder/five.png"
import six from "../../assets/New folder/six.png"
import seven from "../../assets/New folder/seven.png"
import eight from "../../assets/New folder/eight.png"
import nine from  "../../assets/New folder/nine.png"
import ten from "../../assets/New folder/ten.png"
import eleven from "../../assets/New folder/eleven.png"
import tweleve from "../../assets/New folder/tweleve.png"


const Services = () => {

    const staticData =[
        {
            img:first,
            name:"Web Development"
        },
        {
            img:second,
            name:"Mobile Application Development"
        },
        {
            img:third,
            name:"Custom Software Development"
        },
        {
            img:four,
            name:"Cloud Computing Service"
        },
        {
            img:five,
            name:"UI/UX Design"
        },
        {
            img:six,
            name:"Quality Asuurence and Testing"
        },
        {
            img:seven,
            name:"Data Analyst"
        },
        {
            img:eight,
            name:"Graphic Design"
        },
        {
            img:nine,
            name:"Digital Marketing"
        },
        {
            img:ten,
            name:"Maintenance and Support"
        },
        {
            img:eleven,
            name:"E-Commerce Solution"
        },
        {
            img:tweleve,
            name:"Search Engine Optimization"
        },
    ]
  return (
    <div>  
        <h1 className='text-3xl text-white font-poppins font-semibold'>Services we Provides</h1>
        <div className='flex flex-wrap '>
            {staticData.map((val, ind)=>{
                return <div className='w-4/12 mt-24' key={ind}>

                    <div className='flex items-center'>
                        <img src={val.img}/>
                        <p className='ml-5 font-poppins text-lg text-white font-semibold pb-1' style={{borderBottom:"5px solid #E547FF",}}>{val.name}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services