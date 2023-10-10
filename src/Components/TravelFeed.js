import React from 'react'
import FeedPostCard from './FeedPostCard'
import Trending from './Trending'
import { Trends } from '../Utils/constants'
import CreateandSearch from './CreateandSearch'

const TravelFeed = () => {
  return (
    <div className="pt-8">
      <CreateandSearch />
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