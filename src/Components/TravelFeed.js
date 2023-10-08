import React from 'react'
import FeedPostCard from './FeedPostCard'
import Trending from './Trending'
import { Trends } from '../Utils/constants'

const TravelFeed = () => {
  return (
    <div className="pt-8">
      <input className="w-6/12 border px-[2vw] py-[1vh] ml-32 rounded-md" type="text" placeholder="Search people"/>
      <div className="flex w-[60vw]">
        <div>
        <FeedPostCard />
        <FeedPostCard />
        <FeedPostCard />
        </div>
        <div className="flex-column ml-16">
        <p className="font-semibold pb-8 pt-12">Trending</p>
        {Trends?.map((trend, index) => (
  <Trending key={index} Rank={trend.Rank} Place={trend.Location} Name={trend.Name} />
))}
</div>
    </div>
    </div>
  )
}

export default TravelFeed