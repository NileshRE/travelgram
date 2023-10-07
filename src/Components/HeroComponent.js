import React from 'react'
import { Images } from '../Utils/constants'

const HeroComponent = () => {
  return (
    <div>
    <div className="absolute -z-30">
        <img src={Images.hero} alt="Hero"/>
    </div>
    <div className="py-96 px-32 bg-gradient-to-b from-black">
        <p className="text-3xl text-white w-[50%]">TravelGram is an online community of travelers where people share their experiences and info about trips.</p>
        <button className="px-12 py-6 my-8 rounded-md bg-[#04566E] text-lg text-white font-medium">Join the Community Now!!</button>
    </div>
    </div>
  )
}

export default HeroComponent