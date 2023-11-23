import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PlacesCard = ({Pics, Category}) => {
  return (
    <div>
        <div className="w-[30vw] pb-8 text-center rotate-2">
        <div className="w-[30vw] pl-14">
        <LazyLoadImage src={Pics} alt='Food-streets' className="object-cover rounded-md" />
        </div>
        <p className="text-white font-medium mt-3">{Category}</p>
        </div>
    </div>
  )
}

export default PlacesCard