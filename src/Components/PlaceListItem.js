import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PlaceListItem = ({photo, sitename}) => {
  return (
    <div>
      <div className="mb-4 mx-4 w-[25vw] h-[auto]">
        <LazyLoadImage src={photo} alt='pics' className="rounded-md" />
      <p className="font-medium">{sitename}</p>
    </div>
  </div>
  )
}


export default PlaceListItem