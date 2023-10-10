import React from 'react'
import usePlacesName from './Hooks/usePlacesName';
import { useSelector } from 'react-redux';
import PlaceListItem from './PlaceListItem';


const Places = () => {
  usePlacesName();
  
  const places = useSelector((store)=>store.places.newPlaces)
  const pics = useSelector((store)=>store.places.pics)

  return (
    <div className="bg-gradient-to-b from-purple-800 via-yellow-800 to-orange-800 text-white">
      <p className="font-semibold text-lg mb-12 pt-8 px-4">Places to Visit in Mumbai</p>
    <div className="flex flex-wrap justify-center">
      {pics?.map((pic, index)=>(<PlaceListItem photo={pic} sitename={places[index]}/>))}
    </div>
    </div>
  )
}

export default Places