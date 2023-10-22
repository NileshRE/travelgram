import React from 'react'
import { Images } from '../Utils/constants'
import { LuSendHorizonal } from "react-icons/lu";

const NoMessage = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center px-12 py-4 bg-slate-800 border-y-2 border-gray-500">
        <div className="w-14 mr-4">
            <img src={Images.dp} alt="dp"/>
        </div>
        <p className="font-medium text-lg text-white">Sunny</p>
    </div>
    <div className="bg-slate-800 pt-48 pb-4 px-6">
    <p className='font-medium text-center mb-56 text-neutral-200'>Start a conversation now!!!</p>
    <div className="object-bottom sticky flex items-center">
    <div className="flex w-full">
    <input className="px-4 py-3 w-full rounded-l-full" type='field' placeholder='Write a message'/>
    <button className="px-4 py-3 bg-white rounded-r-full">
      <LuSendHorizonal size={32} color='#04566E' />
    </button>
  </div>
</div>
  </div>
  </div>
  </div>
  )
}
    


export default NoMessage