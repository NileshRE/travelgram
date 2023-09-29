import React from 'react'
import { Images } from '../Utils/constants'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between absolute w-full bg-gradient-to-b from-black z-10">
      <div>
        <img src={Images.logo} alt='travelgram-logo'/>
      </div>
      <div className="flex items-center">
        <ul className="flex text-white z-10">
          <li className="px-4 text-md"><Link to="/feed">Travel Feed </Link></li>
          <li className="px-4 text-md"><Link to="/groupjoin">Groups</Link></li>
          <li className="px-4 text-md"><Link to="/places">Places</Link></li>
          <li className="px-4 text-md"><Link to="/messages">Messages</Link></li>
        </ul>
        <div>
        <button className="px-4 py-2 mx-16 bg-blue-700 rounded-md text-white"><Link to="/login">Log in</Link></button>
      </div>
      </div>
    </div>
  )
};

export default Header
