import React from 'react'

const PlaceListItem = ({photo, sitename}) => {
  return (
    <div>
      <div className="mb-4 mx-4 w-[25vw] h-[auto]">
      <img className="rounded-md" src={photo} alt='pics'/>
      <p className="font-medium">{sitename}</p>
    </div>
  </div>
  )
}


export default PlaceListItem