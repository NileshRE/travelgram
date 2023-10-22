import React from 'react'
import Messagecard from './Messagecard'


const ChatPage = () => {

  return (
    <div className="py-8 bg-slate-800 w-full px-8">
      <p className="text-white font-semibold text-xl mb-8">Chats</p>
    <Messagecard Name={"Sunny"} Msg={"Hi"} DT={"2:03pm"} num={1}/>
    <Messagecard Name={"Trekkers"} Msg={"Are you interested?"} DT={"8:03pm"} num={3} />
    <Messagecard Name={"James"} Msg={"Hi, is there any trip scheduled?"} DT={"6:53pm"} num={3} />
    <Messagecard Name={"Foodies"} Msg={"We will meet at 6pm at Chaat shop"} DT={"2:23pm"} />
    <Messagecard Name={"Rohan"} Msg={"Will you join us for Chopta Trek "} DT={"Friday"} num={1} />
    <Messagecard Name={"Rahul"} Msg={"We felt there is no way out"} DT={"Friday"} num={2} />
    <Messagecard Name={"Vijay"} Msg={"It was a trip to remember"} DT={"Tuesday"} />
  </div>
  )
}

export default ChatPage