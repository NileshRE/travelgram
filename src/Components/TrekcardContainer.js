import React from 'react'
import TrekCard from './TrekCard'
import { TrekImages, Desc } from '../Utils/constants'

const TrekcardContainer = () => {
  return (
    <div className="flex overflow-y-clip">
         <TrekCard trekimage={TrekImages.trek1} TD={"6 Days | Moderate"} Name={"HAR KI DUN"} Desc={Desc.Desc1} />
        <TrekCard trekimage={TrekImages.trek4} TD={"6 Days | Easy-Moderate"} Name={"KEDARKANTHA"} Desc={Desc.Desc4} />
        <TrekCard trekimage={TrekImages.trek5} TD={"5 Days | Difficult"} Name={"BRAHMATAL TREK"} Desc={Desc.Desc5} />
        <TrekCard trekimage={TrekImages.trek2} TD={"7 Days | Moderate"} Name={"DEORITAL CHANDRASILA"} Desc={Desc.Desc2} />
        <TrekCard trekimage={TrekImages.trek3} TD={"3 Days | Easy"} Name={"SANDAKPHU PHALUT TREK"} Desc={Desc.Desc3} />
    </div>
  )
}

export default TrekcardContainer