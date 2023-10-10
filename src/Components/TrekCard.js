import React, { useState } from 'react'
import JoinPge from './JoinPge';
import Modal from './Modal';
import {BiGroup} from "react-icons/bi";
import {IoMaleFemaleOutline, IoTransgenderOutline} from "react-icons/io5";


const TrekCard = ({trekimage, TD, Name, Desc, GroupName, Average_Age, Members, Slogan}) => {
    const [showJoin, setShowJoin] = useState(false);

    const handleJoin = ()=>{
      setShowJoin(true)
    }

    const handleCloseModal = () => {
      setShowJoin(false);
    }
  
  return (
    <div className="w-[30vw] mx-4 p-3 rounded-md relative">
      {Slogan!==undefined && <p className="absolute bg-red-600 text-white text-sm px-4 py-1 rounded-l-md tracking-tighter">{Slogan}</p>}
        <div className="rounded-md w-[430px] h-[285px] hover:scale-105">
            <img className="rounded-t-md" src={trekimage} alt="Har ki Dun"/>
        </div>
        <div className="border-x-2 border-b-2 pt-12 pb-2 rounded-b-md px-3 w-[98.5%]">
        <p className="text-xs pb-4 font-normal text-gray-500">{TD}</p>
        <p className="text-lg font-medium pb-2">{Name}</p>
        <p className="text-sm text-gray-500 py-2">{Desc}</p>
        <div className="flex items-center my-2">
        <BiGroup size={24} color='gray' />
        <p className="font-medium mx-2">{GroupName}</p>
        <span className="mx-2"><IoMaleFemaleOutline size={20} color='gray' /></span>
        <IoTransgenderOutline size={20} color='gray' />
        </div>
        <div className="flex text-sm ml-8">
        <div className="text-center">
        <p className="mb-1 font-medium text-gray-500">Members</p>
        <p>{Members}</p>
        </div>
        <div className="text-center">
        <p className="mb-1 font-medium text-gray-500 ml-4">Average Age</p> 
        <p>{Average_Age}</p>
        </div>
        </div>
        <div className="mt-8 flex justify-end">
        <button className="px-3 py-2 border border-gray-500 rounded-md ml-24 mr-6 text-sm hover:bg-[#04566E] hover:text-white">View Details</button>
        <button className="px-4 py-2 bg-[#04566E] rounded-md text-white hover:opacity-90" onClick={handleJoin}>Join</button>
        <Modal isOpen={showJoin} onClose={handleCloseModal}>
        <JoinPge />
        </Modal>
        </div>
        </div>
    </div>
  )
}

export default TrekCard