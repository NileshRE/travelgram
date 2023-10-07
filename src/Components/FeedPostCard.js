import React, { useState } from 'react'
import { Images } from '../Utils/constants'
import Carousel from './Carousel'
import {AiOutlineHeart, AiFillHeart, AiOutlineComment} from "react-icons/ai"

const FeedPostCard = () => {
  const [btnText, setBtnText] = useState("true");
  const [icon, setIcon] = useState("true");

const handleClick = ()=>{
  setBtnText(!btnText)
}

const handleIcon = ()=>{
  setIcon(!icon)
}
  return (
<div className="grid px-[8vw] py-[3vw]">

<div className="flex items-center justify-between">
  <div className="flex items-center">
    <div className="w-10">
        <img src={Images.dp} alt="dp1"/>
    </div>
    <div className="text-left ml-4">
    <p className="text-lg font-medium">Nilesh Kumar</p>
    <p className="text-xs">Varanasi, India</p>
    </div>
    </div>
    <div>
    <span className="text-xs mr-10">14 hours ago</span>
    <button className="text-blue-500 px-2 py-1 border rounded-md" onClick={handleClick}>{btnText ? "+Follow" : "✓Following"}</button>
    </div>
</div>
<div>
<Carousel />
</div>
<div className="my-2 flex">
  <button onClick={handleIcon} className="text-2xl">{icon ? <AiOutlineHeart /> : <AiFillHeart color='red' />}</button>
  <button><AiOutlineComment size={24} /></button>
  <button></button>
</div>
<div className="w-full text-left">
  <p className="text-sm">Dashaswamedh Ghat in varanasi is one of the prominent ghats along with Assi ghats. It is located close to Vishwanath Temple and is probably the most spectacular ghat. According to one, Lord Brahma created it to welcome Lord Shiva </p>
</div>
<input className="w-full p-2 border rounded-xl mt-4" type="text" placeholder="Write a comment"/>
</div>
  )
}

export default FeedPostCard