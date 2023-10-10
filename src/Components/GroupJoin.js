import React, { useState,  useRef } from 'react'
import TrekcardContainer from './TrekcardContainer'
import RoadTripCont from './RoadTripCont'
import FoodTrips from './FoodTrips'
import {IoMdArrowRoundForward} from "react-icons/io"
import {IoArrowBack} from "react-icons/io5"
import {AiOutlineUserAdd} from  "react-icons/ai"
import CreateGroup from './CreateGroup';
import Modal from './Modal';


const GroupJoin = () => {
  const [showGroup, setShowGroup] = useState(false);
  const trekContainerRefs = {
   trekContainerRef: useRef(null),
   foodContRef: useRef(null),
   roadTripRef: useRef(null)
  };

  const handleGroup = ()=>{
    setShowGroup(true);
}

const handleCloseModal = ()=>{
  setShowGroup(false);
}

  const scrollLeft = (containerRef) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 500;
    }
  };

  const scrollRight = (containerRef) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 500; 
    }
  };

  return (
    <div className="px-8 py-8">
      <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">Groups to Join</h1>
      <button onClick={handleGroup} className="border-2 border-[#04566E] px-4 py-2 rounded-md text-sm flex items-center hover:bg-gradient-to-r from-[#04566E] to-orange-600 hover:text-white hover:border-none"><AiOutlineUserAdd size={20}/>Create a Group</button>
      <Modal isOpen={showGroup} onClose={handleCloseModal}>
        <CreateGroup />
        </Modal>
      </div>
      <div className="flex justify-between items-center">
      <p className="text-lg font-medium py-6">Road Trips</p>
      <div>
      <button className="mx-4" onClick={() => scrollLeft(trekContainerRefs.roadTripRef)}><IoArrowBack size={20}/></button>
      <button onClick={() => scrollRight(trekContainerRefs.roadTripRef)}><IoMdArrowRoundForward size={20} /></button>
      </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar" ref={trekContainerRefs.roadTripRef}>
        <RoadTripCont />
      </div>
      <div className="flex justify-between items-center">
      <p className="text-lg font-medium py-6">Food Cravers</p>
      <div>
      <button className="mx-4" onClick={() => scrollLeft(trekContainerRefs.foodContRef)}><IoArrowBack size={20}/></button>
      <button onClick={() => scrollRight(trekContainerRefs.foodContRef)}><IoMdArrowRoundForward size={20} /></button>
      </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar" ref={trekContainerRefs.foodContRef}>
        <FoodTrips />
      </div>
      <div className="flex justify-between items-center">
      <p className="text-lg font-medium py-6">Trekkers</p>
      <div>
      <button className="mx-4" onClick={()=>scrollLeft(trekContainerRefs.trekContainerRef)}><IoArrowBack size={20}/></button>
      <button onClick={()=>scrollRight(trekContainerRefs.trekContainerRef)}><IoMdArrowRoundForward size={20} /></button>
      </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar" ref={trekContainerRefs.trekContainerRef}>
        <TrekcardContainer />
      </div>
    </div>
  )
}

export default GroupJoin