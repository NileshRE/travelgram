import React from 'react'
import { Images } from '../Utils/constants'

const FeedPostCard = () => {
  return (
<div className="grid w-[60vw] px-[8vw] py-[3vw]">

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
    <button className="text-blue-500 px-2 py-1 border rounded-md">+Follow</button>
    </div>
</div>
<div className="w-[50vw] pt-4">
  <img className="rounded-md" src={Images.post} alt="post"/>
</div>
<div>
  <button><img  className="w-10" src={Images.hearticon} alt="heart-icon"/></button>
  <button><img  className="w-10" src={Images.commenticon} alt="comment-icon"/></button>
  <button></button>
</div>
<div>
  <p className="text-sm">Dashaswamedh Ghat in varanasi is one of the prominent ghats along with Assi ghats. It is located close to Vishwanath Temple and is probably the most spectacular ghat. According to one, Lord Brahma created it to welcome Lord Shiva </p>
</div>
<input className="w-full p-2 border rounded-xl mt-4" type="text" placeholder="Write a comment"/>
</div>
  )
}

export default FeedPostCard