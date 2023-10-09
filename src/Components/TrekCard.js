import React from 'react'


const TrekCard = ({trekimage, TD, Name, Desc}) => {
  return (
    <div className="w-[30vw] mx-4 p-3 rounded-md">
        <div className="rounded-md w-[430px] h-[285px] hover:scale-105">
            <img className="rounded-t-md" src={trekimage} alt="Har ki Dun"/>
        </div>
        <div className="border-x-2 border-b-2 pt-12 pb-2 rounded-b-md px-3 w-[98.5%]">
        <p className="text-xs pb-2 font-normal text-gray-500">{TD}</p>
        <p className="text-lg font-medium py-2">{Name}</p>
        <p className="text-sm text-gray-500">{Desc}</p>
        <div className="mt-8 flex justify-end">
        <button className="px-3 py-2 border border-gray-500 rounded-md ml-24 mr-6 text-sm hover:bg-[#04566E] hover:text-white">View Details</button>
        <button className="px-4 py-2 bg-[#04566E] rounded-md text-white hover:opacity-90">Join</button>
        </div>
        </div>
    </div>
  )
}

export default TrekCard