import React from 'react'
import TrekCard from './TrekCard'
import { Desc, Loc, TrekImages } from '../Utils/constants'


const FoodTrips = () => {
  return (
    <div className="flex overflow-y-clip">
         <TrekCard trekimage={TrekImages.food1} TD={Loc.Loc1} Name={"9 Day Culinary Tour North Indian"} Desc={Desc.Desc11} GroupName={"Lazeez"} Members={7} Average_Age={35} Slogan={"Last seat left!!"} />
        <TrekCard trekimage={TrekImages.food2} TD={Loc.Loc2} Name={"12 Day Holi Festival and Culinary Tours"} Desc={Desc.Desc12} GroupName={"Pakwan Lovers"} Members={8} Average_Age={26}  />
        <TrekCard trekimage={TrekImages.food5} TD={Loc.Loc3} Name={"14 Day Southern India Flavors Culinary Tour"} Desc={Desc.Desc13} GroupName={"Southern Foodies"} Members={6} Average_Age={38} />
        <TrekCard trekimage={TrekImages.food3} TD={Loc.Loc4} Name={"8 Day North Indian Chatka with Kebab and Curry"} Desc={Desc.Desc14} GroupName={"Finger Lickers"} Members={11} Average_Age={29} Slogan={"2 seats left!!"} />
        <TrekCard trekimage={TrekImages.food4} TD={Loc.Loc5} Name={"6 Day Golden Samosa"} Desc={Desc.Desc15} GroupName={"Taste Finders"} Members={9} Average_Age={31} Slogan={"2 seats left!!"} />
    </div>
  )
}

export default FoodTrips