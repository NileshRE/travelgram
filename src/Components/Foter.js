import React from 'react'
import { Images } from '../Utils/constants'

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center py-8">
    <div>
        <img src={Images.logo} alt="logo"/>
    </div>
    <div>
      <p className="font-medium mr-48 pb-12">Follow Us:</p>
      <p className="font-medium mr-48">Contact:</p>
    </div>
    </div>
  )
}

export default Footer