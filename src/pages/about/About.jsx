import React from 'react'
import manIcon from '../../assets/manLogo.png'
import twoman from '../../assets/pavan 3643.png'
const About = () => {
  return (
    <div className='container mx-auto ' >
      <div className="aboutbg  bg-cover h-full w-full ">
        <div className=''>
          <h1 className='text-4xl text-white text-center py-10 font-bold'>Meet To Our <span className='text-[#E547FF]'>Founders</span></h1>
        </div>
        <div className='relative flex my-5 h-96 items-center'>
          <div className="absolute h-72 w-56 left-32 items-center border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={twoman} alt="" />
          </div>
          <div className='ml-32 absolute w-2/3 right-0 h-full grid items-center  p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='ml-24'><span className='text-red-700 font-bold'>Virex BD</span> was born from the passion and vision of a group of dedicated individuals who shared a common dream. Their journey began with a spark of innovation and a commitment to creating something meaningful. With warmth and determination, they steered Virex BD towards success, shaping it into a hub of technology and creativity. The founders' camaraderie and shared aspirations continue to be the driving force behind the company's growth, creating a vibrant and inspiring workplace for all.</p>
          </div>
        </div>
      </div>
      <div className='container flex items-center gap-12 '>
        <div className='left flex-1 items-center justify-center grid gap-5 p-5 bg-[#0C1740] '>
          <h1 className='text-center text-[#FF7171] font-semibold text-2xl'>Founder</h1>
          <img className='rounded-full' src={manIcon} alt="" />
          <button className=' btn text-sm font-medium rounded-lg  p-5 bg-[#92E8FB]'>MD. Khan</button>
        </div>
        <div className='right flex-1'><h1 className='text-5xl font-semibold text-center'>Some information about the founder</h1></div>
      </div>
      <div className='container flex items-center gap-9 '>
        <div className='right flex-1'><h1 className='text-5xl font-semibold text-center'>Some information about the founder</h1></div>
        <div className='right flex-1 items-center justify-center grid gap-5 p-5 bg-[#0C1740] '>
          <h1 className='text-center text-[#FF7171] font-semibold text-2xl'>Co-Founder</h1>
          <img className='rounded-full' src={manIcon} alt="" />
          <button className=' btn text-sm font-medium rounded-lg  p-5 bg-[#92E8FB]'>MD. Khan</button>
        </div>
      </div>
      <div className='m-14 '>
        <h1 className='text-4xl m-4 text-center font-bold'>Meet To Our awesome<span className='text-[#E547FF]'>Teams</span></h1>
        <div className='relative flex my-5 h-96 items-center'>
          <div className="absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
          <div className='ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='ml-24'><h1 className=' font-bold text-2xl my-2'>Front-end Developer</h1>At Virex BD, our Frontend Developers are the architects of engaging and seamless user experiences. Armed with a deep understanding of web technologies, HTML5, CSS3, and JavaScript, they craft visually stunning and responsive interfaces that captivate users. Our team excels in leveraging popular frontend frameworks such as React and Angular, ensuring dynamic and efficient web applications. From translating design concepts into code to optimizing website performance, our Frontend Developers play a crucial role in bringing creativity and functionality together. With a keen eye for detail and a passion for staying current with industry trends, they transform ideas into visually compelling and user-friendly digital solutions, contributing significantly to the overall success of our projects.</p>
          </div>
        </div>

        <div className='relative flex my-5 h-96 items-center'>
          <div className='mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='mr-24'><h1 className='font-bold text-2xl my-2'>Web Designer</h1>At Virex BD, our web designers are the creative minds behind the visual aesthetics and user interface of our digital solutions. Proficient in graphic design, layout principles, and user experience (UX) design, they transform concepts into visually appealing and intuitive websites. Utilizing tools such as Adobe Creative Suite, Figma, and Sketch, our designers craft engaging and responsive designs that prioritize user interaction and satisfaction. They collaborate closely with frontend developers to ensure seamless integration of design elements into functional and user-friendly web applications. Beyond aesthetics, our web designers understand the importance of creating a cohesive and memorable brand identity for our clients, reflecting their values and aspirations through innovative and captivating design solutions.</p>
          </div>
          <div className="absolute right-0   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
        </div>
        <div className='relative flex my-5 h-96 items-center'>
          <div className="absolute h-72 w-56 items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
          <div className='ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='ml-24'><h1 className=' font-bold text-2xl my-2'>Backed Developer</h1>Virex BD's Backend Developers are the architects of the digital infrastructure, powering the functionality and data management behind our innovative solutions. Proficient in languages such as Python, Java, and Node.js, our developers build robust and scalable server-side applications. They expertly design and maintain databases, ensuring efficient data storage and retrieval. Security is paramount, and our Backend Developers implement stringent measures to safeguard sensitive information. Collaborating seamlessly with frontend teams, they create a cohesive and high-performing synergy between the user interface and the server-side logic. Their mastery extends to frameworks like Django, Spring, and Express, enabling the development of dynamic and reliable web applications. At Virex BD, our Backend Developers play a pivotal role in turning ideas into fully functional, secure, and responsive digital experiences.</p>
          </div>
        </div>
        <div className='relative flex my-5 h-96 items-center'>
          <div className='mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='mr-24'><h1 className='font-bold text-2xl my-2'>UI/UX Designer</h1>At Virex BD, our UX/UI Designers are the visionary creators responsible for shaping exceptional user experiences and captivating visual interfaces. Merging artistry with functionality, they design seamless and intuitive digital interactions that prioritize user satisfaction. Proficient in industry-standard tools like Adobe XD, Sketch, and Figma, our designers craft wireframes, prototypes, and high-fidelity mockups that serve as the blueprint for engaging user interfaces. They collaborate closely with cross-functional teams, including developers and product managers, to ensure the alignment of design concepts with technical feasibility and business objectives. Our UX/UI Designers go beyond aesthetics, incorporating user research and feedback to enhance usability and create designs that resonate with our clients' target audiences. At Virex BD, we believe that exceptional user experiences are at the core of successful digital solutions, and our UX/UI Designers are instrumental in bringing this vision to life.</p>
          </div>
          <div className="absolute right-0   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
        </div>
        <div className='relative flex my-5 h-96 items-center'>
          <div className="absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
          <div className='ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='ml-24'><h1 className=' font-bold text-2xl my-2'>Digital Marketer</h1>In the dynamic realm of digital marketing at Virex BD, our Digital Marketers are strategic architects of online presence and brand visibility. Armed with a profound understanding of the digital landscape, they leverage a mix of SEO, social media marketing, content creation, and data analytics to drive targeted and measurable results. Our digital marketers craft compelling campaigns that resonate with the target audience, ensuring a strong online footprint for our clients. Proficient in tools such as Google Analytics, SEMrush, and social media management platforms, they analyze data to optimize strategies and enhance performance continually. Collaborating seamlessly with other teams, they contribute to a holistic approach that aligns marketing efforts with overall business goals. At Virex BD, our Digital Marketers are passionate about navigating the ever-evolving digital landscape, staying ahead of trends, and delivering impactful campaigns that leave a lasting impression.</p>
          </div>
        </div>

        <div className='relative flex my-5 h-96 items-center'>
          <div className='mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white'>
            <p className='mr-24'><h1 className='font-bold text-2xl my-2'>Data Analyst</h1>At Virex BD, our Data Analysts are the architects of actionable insights and informed decision-making. Proficient in data extraction, cleaning, and analysis, they turn raw data into valuable information that drives strategic business outcomes. Armed with a mastery of statistical tools, programming languages such as Python or R, and data visualization platforms like Tableau, our Data Analysts uncover patterns, trends, and correlations within complex datasets. They work closely with cross-functional teams, providing valuable insights that inform business strategies, optimize processes, and contribute to organizational growth. Rigorous attention to detail, critical thinking, and a commitment to data integrity define the approach of our Data Analysts. At Virex BD, we believe in the transformative power of data, and our Data Analysts play a pivotal role in unlocking its potential for our clients.</p>
          </div>
          <div className="absolute right-0   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img className='rounded-t-xl h-auto flex-grow' src={manIcon} alt="" />
            <h1 className='text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full'>MD Khan</h1>
          </div>
        </div>


      </div>


    </div>
  )
}

export default About