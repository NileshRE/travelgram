import React from 'react'
import HeroComponent from './HeroComponent'
import FeedComponent from './FeedComponent'
import GroupComponent from './GroupComponent'
import PlacesComponent from './PlacesComponent'
import MessageComponent from './MessageComponent'

const Body = () => {
  return (
    <div>
        <HeroComponent />
        <FeedComponent />
        <GroupComponent />
        <PlacesComponent />
        <MessageComponent />
    </div>
  )
}

export default Body