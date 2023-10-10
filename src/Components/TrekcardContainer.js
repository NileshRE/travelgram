import React from 'react'
import TrekCard from './TrekCard'
import { TrekImages, Desc } from '../Utils/constants'

const TrekcardContainer = () => {
  return (
    <div className="flex overflow-y-clip">
         <TrekCard trekimage={TrekImages.trek1} TD={"6 Days | Moderate"} Name={"HAR KI DUN"} Desc={Desc.Desc1} GroupName={"Nature Lovers"} Members={12} Average_Age={48} />
        <TrekCard trekimage={TrekImages.trek4} TD={"6 Days | Easy-Moderate"} Name={"KEDARKANTHA"} Desc={Desc.Desc4} GroupName={"KeDars"} Members={8} Average_Age={24} Slogan={"2 seats left!!"} />
        <TrekCard trekimage={TrekImages.trek5} TD={"5 Days | Difficult"} Name={"BRAHMATAL TREK"} Desc={Desc.Desc5} GroupName={"WE Trekkers"} Members={6} Average_Age={32} />
        <TrekCard trekimage={TrekImages.trek2} TD={"7 Days | Moderate"} Name={"DEORITAL CHANDRASILA"} Desc={Desc.Desc2} GroupName={"Thrill Trips"} Members={4} Average_Age={36} />
        <TrekCard trekimage={TrekImages.trek3} TD={"3 Days | Easy"} Name={"SANDAKPHU PHALUT TREK"} Desc={Desc.Desc3} GroupName={"Trekkers Gang"} Members={9} Average_Age={29} />
    </div>
  )
}

export default TrekcardContainer