import React from 'react'

const PlacesCard = ({Pics, Category}) => {
  return (
    <div>
        <div className="w-[30vw] pb-8 text-center rotate-2">
        <div className="w-[30vw] pl-14">
            <img className="object-cover rounded-md" src={Pics} alt="Food-streets"/>
        </div>
        <p className="text-white font-medium mt-3">{Category}</p>
        </div>
    </div>
  )
}

export default PlacesCard