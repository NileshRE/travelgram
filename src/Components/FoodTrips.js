import React from 'react'
import TrekCard from './TrekCard'
import { Desc, Loc, TrekImages } from '../Utils/constants'


const FoodTrips = () => {
  return (
    <div className="flex overflow-y-clip">
         <TrekCard trekimage={TrekImages.food1} TD={Loc.Loc1} Name={"9 Day Culinary Tour North Indian"} Desc={Desc.Desc11} />
        <TrekCard trekimage={TrekImages.food2} TD={Loc.Loc2} Name={"12 Day Holi Festival and Culinary Tours"} Desc={Desc.Desc12} />
        <TrekCard trekimage={TrekImages.food5} TD={Loc.Loc3} Name={"14 Day Southern India Flavors Culinary Tour"} Desc={Desc.Desc13} />
        <TrekCard trekimage={TrekImages.food3} TD={Loc.Loc4} Name={"8 Day North Indian Chatka with Kebab and Curry"} Desc={Desc.Desc14} />
        <TrekCard trekimage={TrekImages.food4} TD={Loc.Loc5} Name={"6 Day Golden Samosa"} Desc={Desc.Desc15} />
    </div>
  )
}

export default FoodTrips