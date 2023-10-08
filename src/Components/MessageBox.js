import React from 'react'
import { Images } from '../Utils/constants'
import { LuSendHorizonal } from "react-icons/lu";

const MessageBox = () => {
  return (
    <div className="">
        <div className="flex items-center w-full px-12 py-4 bg-slate-800 border-y-2 border-gray-500">
        <div className="w-14 mr-4">
            <img src={Images.dp} alt="dp"/>
        </div>
        <p className="font-medium text-lg text-white">Sunny</p>
    </div>
    <div className="bg-slate-800 pt-80 pb-4 px-6">
    <div className="text-right pb-4">
        <span className="px-8 py-3 rounded-full border border-gray-500 bg-green-300">Hi</span>
    </div>
    <div className="text-left pb-8">
        <span className="px-8 py-3 rounded-full border border-gray-500 bg-gray-300">Hi</span>
    </div>
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
  )
}

export default MessageBox