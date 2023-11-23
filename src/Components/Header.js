import React from 'react'
import { Images, SuppLang } from '../Utils/constants'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {changeLang} from '../Utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const handleLangChng = (e)=>{
    dispatch(changeLang(e.target.value))
  }

  return (
    <div className="flex justify-between w-full bg-black z-10">
      <div>
        <img src={Images.logo} alt='travelgram-logo'/>
      </div>
      <div className="flex items-center font-medium">
        <ul className="flex text-white z-10">
        <li className="px-5 text-md"><Link className="focus:text-blue-700 focus:text-lg" to="/">Home </Link></li>
          <li className="px-5 text-md"><Link className="focus:text-blue-700 focus:text-lg" to="/feed">Travel Feed </Link></li>
          <li className="px-5 text-md"><Link className="focus:text-blue-700 focus:text-lg" to="/groupjoin">Groups</Link></li>
          <li className="px-5 text-md"><Link className="focus:text-blue-700 focus:text-lg" to="/places">Places</Link></li>
          <li className="px-5 text-md"><Link className="focus:text-blue-700 focus:text-lg" to="/messages">Messages</Link></li>
        </ul>
        <div>
          <select className="px-2 py-1 rounded-md" onChange={handleLangChng}>
            {SuppLang.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
            </select>
        <button className="px-4 py-2 mx-16 bg-[#04566E] rounded-md text-white"><Link to="/login">Log in</Link></button>
      </div>
      </div>
    </div>
  )
};

export default Header
