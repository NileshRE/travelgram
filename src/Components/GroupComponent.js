import React from 'react'
import GroupCard from './GroupCard'
import { Images,Ctgry } from '../Utils/constants'


const GroupComponent = () => {
  return (
    <div className="bg-zinc-900 text-white">
    <p className="text-2xl font-semibold pt-12 pb-4 px-12">Join like-minded Groups</p>
    <div className="inline-flex flex-wrap justify-center">
       <GroupCard Picture={Images.foodies} category={Ctgry.food} />
       <GroupCard Picture={Images.trekk} category={Ctgry.trek} />
       <GroupCard Picture={Images.camper} category={Ctgry.camp} />
       <GroupCard Picture={Images.biker} category={Ctgry.bike} />
    </div>
    <div>
        <p className="text-xl font-medium text-center my-8">“Unity in Diversity”</p>
        <p className="text-center pb-12">Meet new people in community, know them and join them if you want to travel along with them.</p>
        </div>
    </div>
  )
}

export default GroupComponent