import React from 'react'
import { Images } from '../Utils/constants'

const Header = () => {
  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black z-10">
      <div>
        <img src={Images.logo} alt='travelgram-logo'/>
      </div>
      <div className="flex items-center">
        <ul className="flex text-white z-10">
          <li className="px-4 text-md">Travel Feed</li>
          <li className="px-4 text-md">Groups</li>
          <li className="px-4 text-md">Places</li>
          <li className="px-4 text-md">Messages</li>
        </ul>
        <div>
        <button className="px-4 py-2 mx-16 bg-blue-700 rounded-md text-white">Log in</button>
      </div>
      </div>
    </div>
  )
};

export default Header
