import React from 'react'
import TrekcardContainer from './TrekcardContainer'
import RoadTripCont from './RoadTripCont'
import FoodTrips from './FoodTrips'
import { useRef } from 'react'
import {IoMdArrowRoundForward} from "react-icons/io"
import {IoArrowBack} from "react-icons/io5"


const GroupJoin = () => {
  const trekContainerRefs = {
   trekContainerRef: useRef(null),
   foodContRef: useRef(null),
   roadTripRef: useRef(null)
  };

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
      <h1 className="text-2xl font-semibold">Groups to Join</h1>
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