import React from 'react'
import GroupCard from './GroupCard'
import { Images,Ctgry } from '../Utils/constants'
import lang from '../Utils/LanguageConstants'
import { useSelector } from 'react-redux'



const GroupComponent = () => {
  const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className="bg-zinc-900 text-white">
    <p className="text-2xl font-semibold pt-12 pb-4 px-12">{lang[langKey].groupHeading}</p>
    <div className="inline-flex flex-wrap justify-center">
       <GroupCard Picture={Images.foodies} category={Ctgry.food} />
       <GroupCard Picture={Images.trekk} category={Ctgry.trek} />
       <GroupCard Picture={Images.camper} category={Ctgry.camp} />
       <GroupCard Picture={Images.biker} category={Ctgry.bike} />
    </div>
    <div>
        <p className="text-xl font-medium text-center my-8">“{lang[langKey].groupP1}”</p>
        <p className="text-center pb-12">{lang[langKey].groupP2}</p>
        </div>
    </div>
  )
}

export default GroupComponent