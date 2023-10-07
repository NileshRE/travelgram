import React from 'react'

const Trending = ({Rank, Place, Name }) => {
  return (
    <div className="pt-2 pb-3">
        <div className="flex px-4 py-2 shadow rounded-md w-[22em]">
        <span className="p-4 text-center border rounded-full font-bold mr-8">{Rank}</span>
        <div>
          <p className="text-medium">{Place}</p>
          <p className="text-sm font-light">{Name}</p>
        </div>
        </div>
    </div>
  )
}

export default Trending