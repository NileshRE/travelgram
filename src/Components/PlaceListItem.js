import React from 'react'

const PlaceListItem = ({photo, sitename}) => {
  return (
    <div>
      <div className="mb-2 mx-4 w-[320px] h-[auto]">
      <img className="rounded-md" src={photo} alt='pics'/>
      <p className="font-normal">{sitename}</p>
    </div>
  </div>
  )
}


export default PlaceListItem