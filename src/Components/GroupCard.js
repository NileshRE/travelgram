import React from 'react'

const GroupCard = ({Picture, category}) => {
  return (
    <div className="px-32 py-12 rotate-2">
        <div className="w-[28vw] z-10 absolute opacity-70">
            <img className="rounded-md" src={Picture} alt="foodies"/>
        </div>
        <p className="text-white font-semibold text-lg pt-64 ml-72 relative z-40">{category}</p>
    </div>
  )
}

export default GroupCard