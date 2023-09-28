import React from 'react'
import { Images } from '../Utils/constants'

const PlacesComponent = () => {
  return (
    <div>
        <p className="text-2xl font-semibold py-10 px-12">Explore places in the City</p>
        <div className="w-96 h-52">
            <img className="object-cover" src={Images.food_streets} alt="Food-streets"/>
        </div>
    </div>
  )
}

export default PlacesComponent