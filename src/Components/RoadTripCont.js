import React from 'react'
import TrekCard from './TrekCard'
import { TrekImages, Desc } from '../Utils/constants'

const RoadTripCont = () => {
  return (
    <div className="flex overflow-y-clip">
         <TrekCard trekimage={TrekImages.road1} TD={"11 Days"} Name={"LEH LADAKH WINTER EXPEDITION"} Desc={Desc.Desc6} />
        <TrekCard trekimage={TrekImages.road2} TD={"6 Days"} Name={"FRIENDSHIP HIGHWAY DRIVE"} Desc={Desc.Desc7} />
        <TrekCard trekimage={TrekImages.road5} TD={"7 Days"} Name={"SPIRITUAL SIKKIM"} Desc={Desc.Desc9} />
        <TrekCard trekimage={TrekImages.road3} TD={"9 Days"} Name={"HIMALAYAS LEH LADAKH ROAD TRIP"} Desc={Desc.Desc10} />
        <TrekCard trekimage={TrekImages.road4} TD={"11 Days"} Name={"THE WESTERN CIRCUIT"} Desc={Desc.Desc8} />
    </div>
  )
}

export default RoadTripCont