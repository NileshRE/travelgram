import React from 'react'
import { Images } from '../Utils/constants'

const Messagecard = ({Name, Msg, DT, num}) => {
  return (
    <div>
        <div className="px-4 py-4 border border-gray-500 rounded-md flex justify-between items-center w-full text-white active:bg-[#04566E]">
    <div className="flex items-center">
    <div className="w-14">
      <img src={Images.dp} alt="dp"/>
    </div>
    <div className="ml-4">
    <p>{Name}</p>
    <p className="font-light">{Msg}</p>
    </div>
    </div>
    <div className="text-center">
    <p className="mb-2 text-sm text-gray-400">{DT}</p>
    {num!==undefined && <span className="rounded-full px-4 py-2 text-center border border-gray-500 text-xs font-semibold bg-[#04566E]">{num}</span>}
    </div>
  </div>
    </div>
  )
}

export default Messagecard