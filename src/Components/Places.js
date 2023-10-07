import React from 'react'
import usePlacesName from './Hooks/usePlacesName';
import { useSelector } from 'react-redux';
import PlaceListItem from './PlaceListItem';


const Places = () => {
  usePlacesName();
  
  const places = useSelector((store)=>store.places.newPlaces)
  const pics = useSelector((store)=>store.places.pics)

  return (
    <div>
      <p className="font-semibold text-lg mb-6 pt-40 px-4">Places to Visit</p>
    <div className="flex flex-wrap">
      {pics?.map((pic, index)=>(<PlaceListItem photo={pic} sitename={places[index]}/>))}
    </div>
    </div>
  )
}

export default Places