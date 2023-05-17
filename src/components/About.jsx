import React, { useState } from 'react';
import { wedding5,wedding4, wedding3 } from '../assets';
 
const About = () => {
  return (
    <section className='flex flex-col  bg-gradient-to-r from-rose-100 to-teal-100'> 
    <h1 className='sm:ml-8  ml-[33%] font-bold text-2xl'>Rreth nesh!</h1>
      <hr className='sm:w-[15%] h-[3px] bg-gray-400 w-[100%]'/>
        <div className='flex md:flex-row justify-between items-center flex-col'>
            <div className='flex flex-col flex-1 sm:justify-start sm:items-start justify-center items-center'>
                <h1 className='md:text-5xl text-gray-900 text-xl font-extrabold sm:mt-0 mt-6'>Cdo zgjidhje e jotja <br/>do te jete  <span className='text-gray-400'>PERFEKTE!</span></h1>
                <p className='sm:w-[80%] w-[95%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde? Fugiat cum eaque cumque nam facere corporis repudiandae architecto, incidunt voluptates sit dicta error nesciunt nihil aliquam eveniet omnis vel.</p>
            </div>
           
        <div className='flex flex-1 justify-end sm:py-0 py-10 sm:mx-0  mx-4 '>
          <div className='flex flex-row justify-center items-center'>
          <img src={wedding5} className="w-[50%] h-[50%] mr-10 rounded-full mt-[-100px]"/>
          <img src={wedding4} className="w-[50%] h-[50%] rounded-full mt-10 mr-10" />
          <img src={wedding3} className="w-[50%] h-[50%] rounded-full mt-[-100px]" />
          </div>
        </div>
        
        </div>
      
    </section>
  )
}

export default About

