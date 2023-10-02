import React from 'react'
import FeedPostCard from './FeedPostCard'

const TravelFeed = () => {
  return (
    <div className="pt-[20vh]">
      <input className="w-6/12 border px-[2vw] py-[1vh] ml-32 rounded-md" type="text" placeholder="Search people"/>
      <FeedPostCard />
      <div>
        <p>abcd</p>
        <p>avcd</p>
      </div>
    </div>
  )
}

export default TravelFeed