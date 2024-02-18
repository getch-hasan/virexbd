import React from 'react';

const Projects = ({ data }) => {
    const { name, image } = data
    console.log(data)
    return (
        <div className=''>


            <div class=" bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className='rounded-t-xl ' src={image} alt="" />
                </a>
                <div class="p-5">
                    <h1 className='text-center text-lg font-bold'>{name}</h1>
                </div>
            </div>

        </div>
    );
};

export default Projects;