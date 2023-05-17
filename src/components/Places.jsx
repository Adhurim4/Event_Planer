  import React, { useState } from 'react'
  import Card from './Card'
  import {places} from '../constants';
 

  const Places = ({simplified}) => {

    const numCardsToShow = simplified ? 4: places.length;
 
    return (
      <section className='flex flex-col bg-gradient-to-r from-rose-100 to-teal-100'>
          <div className='sm:w-[10%] w-[100%] mx-auto mt-8'>
          <h1 className='sm:ml-7 ml-[40%] font-bold text-2xl'>Places</h1>
          <hr className='w-[full] h-[3px] bg-gray-400'/>
          </div>
          <div className='grid sm:grid-cols-4 gap-4 mt-10 mx-auto grid-cols-1'>
              {places.slice(0, numCardsToShow).map((place) => (
                  <Card
                  id={place.id}
                  key={place.id}
                  title={place.title}
                  imageUrl={place.imageUrl}
                  description={place.description.substring(0,50)}
                  />           
              ))}
          </div>
      </section>
    )
  }

  export default Places