import React from 'react'
import { Images } from '../Utils/constants'

const HeroComponent = () => {
  return (
    <div className="relative">
    <div className="absolute -z-30">
        <img src={Images.hero} alt="Hero"/>
    </div>
    <div className="pt-44 pb-28 px-32 bg-gradient-to-b from-black">
        <p className="text-3xl text-white w-[60%]"><span className="animate-pulse text-8xl font-semibold bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 inline-block text-transparent bg-clip-text">TravelGram</span> is an online community of travelers where people share their experiences and info about trips.</p>
        <button className="px-12 py-6 my-8 rounded-md bg-[#04566E] text-lg text-white font-medium">Join the Community Now!!</button>
    </div>
    </div>
  )
}

export default HeroComponent