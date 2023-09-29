import React from 'react'
import { Images } from '../Utils/constants'

const MessageComponent = () => {
  return (
    <div className="bg-[#a4a4a4] py-14">
        <p className="text-2xl font-semibold pb-10 px-12">Interact with community members</p>
        <div className="flex my-8 mx-8 justify-between">
            <div className="pt-28">
            <img src={Images.dp3} alt="dp-3"/>
            </div>
            <div className="pt-32">
            <img src={Images.icon1} alt="icon-1"/>
            </div>
            <div>
            <img src={Images.dp4} alt="dp-4"/>
            </div>
            <div className="pt-32">
            <img src={Images.icon2} alt="icon-2"/>
            </div>
            <div className="pt-24">
            <img src={Images.dp5} alt="dp-5"/>
            </div>
            <div className="pt-16">
            <img src={Images.icon3} alt="icon-3"/>
            </div>
            <div>
            <img src={Images.dp6} alt="dp-6"/>
            </div>
        </div>
        <div>
            <p className="font-xl font-medium w-[40%] mx-auto">Chat with group leaders to join, comment, like and follow other members in the community, get engaged and get going.</p>
         </div>
    </div>
  )
}

export default MessageComponent