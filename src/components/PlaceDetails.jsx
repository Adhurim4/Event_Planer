import React from 'react'
import  { useParams } from 'react-router-dom'
import { places } from '../constants';

const PlaceDetails = () => {

  const { placeId } = useParams();  

  const place = places.find(place => place.id == placeId);
 
  return (
    <div className="flex flex-col xl:w-[1200px] w-full mx-auto md:my-[100px] md:justify-start justify-center">
      <h1 className='font-extrabold text-4xl my-[20px] md:ml-0 ml-5'>{place.title}</h1>
      <div className='flex md:flex-row flex-col md:items-start items-center md:mx-0 mx-5'>
        <img src={place.imageUrl} alt={place.title} className="md:w-[50%] sm:h-[700px] object-cover rounded-xl w-[80%] h-[400px] sm:mx-0 mx-auto  " />
        <p className='md:mx-3 font-semibold'>{place.description}</p>
      </div>

    </div>
  );
};
export default PlaceDetails;