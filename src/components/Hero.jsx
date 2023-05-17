import React from 'react'
import {wedding2} from '../assets'

const Hero = () => (
    
    <section className="flex md:flex-row flex-col sm:py-auto">
    <div className="md:flex-row flex flex-col justify-between items-center py-8">
        <div className="flex flex-1 flex-col sm:justify-start sm:items-start items-center sm:px-0 px-4">
            <h1 className="max-w-[500px] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Per nje event te <span className="text-gray-400">PAHARRUESHEM!</span> </h1>
            <p className="max-w-[500px] mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">Nga vendi ku do te organizoni, veshjet qe deshironi, me dekorin qe do ta dekoroni dhe te gjitha te tjerat mund ti gjeni ketu ne nje vend te vetem.</p>
            <a href="#" className="px-5 py-3  justify-start  font-medium  text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-100">
              Na kontaktoni
            </a> 
        </div>
        <div className="md:flex-row flex-col flex flex-1 md:justify-end my-5 justify-center items-center">
            <img src={wedding2} alt="mockup" className="sm:w-[70%] sm:h-[70%] w-[100%] h-[100%] shadow-md sm:rounded-full rounded-lg"  />
        </div>                
    </div>
</section>

  )

export default Hero