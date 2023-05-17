import React from 'react'
import About from './About'
import Hero from './Hero'
import Places from './Places'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>

      <Navbar />

    <div className= 'flex justify-center items-start py-[100px]'>
      <div className="xl:max-w-[1280px] bg-gradient-to-l md:bg-gradient-to-r">
      <Hero />
      </div>
    </div>

    <div className='flex justify-center items-center py-[150px]'>
      <div className='xl:max-w-[1280px] w-full'>
          <About />
      </div>
    </div>

    <div className='flex justify-center items-center md:py-[100px] py-[60px]'>
      <div className='xl:max-w-[1280px] w-full'>
        <Places simplified /> 
        <h1 className='font-semibold mt-[20px] text-xl mx-[45.8%]'><Link to='/places'>Show more</Link></h1>
      </div>
    </div>
  </div>
  )
}

export default Home