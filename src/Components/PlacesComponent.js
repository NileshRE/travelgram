import React from 'react'
import { Images, Ctgry } from '../Utils/constants'
import PlacesCard from './PlacesCard'

const PlacesComponent = () => {
  return (
    <div className="py-16 bg-[#313131] text-white">
    <p className="text-2xl font-semibold pb-16 px-12">Explore places in the City</p>
    <div className="flex flex-wrap justify-center">
        <PlacesCard Pics={Images.monuments} Category={Ctgry.monuments} />
        <PlacesCard Pics={Images.cultures} Category={Ctgry.cultures} />
        <PlacesCard Pics={Images.ghats} Category={Ctgry.ghats} />
        <PlacesCard Pics={Images.adventure} Category={Ctgry.adventure} />
        <PlacesCard Pics={Images.markets} Category={Ctgry.markets} />
        <PlacesCard Pics={Images.local} Category={Ctgry.local} />
    </div>
    </div>
  )
}

export default PlacesComponent