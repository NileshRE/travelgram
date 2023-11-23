import React from 'react'
import { Images } from '../Utils/constants'
import { useSelector } from 'react-redux'
import lang from '../Utils/LanguageConstants'

const HeroComponent = () => {
  const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className="relative">
    <div className="absolute -z-30">
        <img src={Images.hero} alt="Hero"/>
    </div>
    <div className="pt-44 pb-28 px-32 bg-gradient-to-b from-black">
        <p className="text-3xl text-white w-[60%]"><span className="animate-pulse text-8xl font-semibold bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 inline-block text-transparent bg-clip-text">TravelGram</span> {lang[langkey].Header}</p>
        <button className="px-12 py-6 my-8 rounded-md bg-[#04566E] text-lg text-white font-medium">{lang[langkey].btnText}</button>
    </div>
    </div>
  )
}

export default HeroComponent