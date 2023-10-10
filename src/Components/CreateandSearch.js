import React from 'react'
import {FaPencilAlt} from "react-icons/fa"
import {IoMdPhotos} from "react-icons/io"
import {BiSolidVideo, BiSearchAlt} from "react-icons/bi"


const CreateandSearch = () => {
  return (
    <div className="flex items-center mx-24">
    <div className="flex items-center px-4 py-2 border border-gray-200 rounded-full">
    <p className="ml-10 my-4 mr-4 font-semibold text-xl">Create</p>
      <div className="flex items-center px-4 py-2 mx-8 shadow-sm rounded-full cursor-pointer">
        <span className="mx-4">Post</span>
      <span><FaPencilAlt size={20} color='orange' /></span>
      </div>
      <div className="flex items-center px-4 py-2 mx-8 shadow-sm rounded-full cursor-pointer">
        <span className="mx-4">Photos</span>
      <span><IoMdPhotos size={24} color='#87CEEB' /></span>
      </div>
      <div className="flex items-center px-4 py-2 mx-8 shadow-sm rounded-full cursor-pointer">
        <span className="mx-4">Videos</span>
      <span><BiSolidVideo size={28} color='red' /></span>
      </div>
      </div>
      <input className="w-3/12 border-y border-l px-8 py-4 ml-16 rounded-l-md" type="text" placeholder="Search people"/>
      <span className="border-y border-r px-8 py-4 rounded-r-md cursor-pointer"><BiSearchAlt size={24} color='gray' /></span>
      </div>
  )
}

export default CreateandSearch