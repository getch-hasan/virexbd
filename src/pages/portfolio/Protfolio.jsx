import React, { useEffect, useState } from 'react';
import Projects from './Projects';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/ecommerce.jpeg';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    { _id: 1, name: "Mobile App", image: image1 },
    { _id: 2, name: "Ecommerce Solutions", image: image2 },
    { _id: 3, name: "Mobile App", image: image1 },
    { _id: 4, name: "Mobile App", image: image1 },
    { _id: 5, name: "Ecommerce Solutions", image: image2 },
    { _id: 6, name: "Mobile App", image: image1 }
  ];

  useEffect(() => {
    handleFilter(); // Initial filtering when component mounts
  }, [searchQuery]); // Re-run effect whenever searchQuery changes

  const handleFilter = () => {
    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProjects(filtered);
  };

  return (
    <div className="container mx-auto">
      <div className='justify-center'>
        <h1 className='text-4xl text-center font-bold'>Our Successful <span className='text-[#E547FF]'>Projects!</span></h1>
        <div className='flex gap-8 m-5 justify-center'>
          <button value='' onClick={() => setSearchQuery('')} className='text-[#E547FF]'>All</button>
          <button value='Ecommerce Solutions' onClick={() => setSearchQuery('Ecommerce Solutions')}>Website</button>
          <button value='Mobile App' onClick={() => setSearchQuery('Mobile App')}>Application</button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 m-12 '>
        {
          projects.map(data => <Projects key={data._id} data={data}></Projects>)
        }
      </div>
    </div>
  );
};

export default Portfolio;
