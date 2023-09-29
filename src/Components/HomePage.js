import React from 'react'
import HeroComponent from './HeroComponent'
import FeedComponent from './FeedComponent'
import GroupComponent from './GroupComponent'
import PlacesComponent from './PlacesComponent'
import MessageComponent from './MessageComponent'
import Footer from './Foter'


const HomePage = () => {
  return (
    <div>
        <HeroComponent />
        <FeedComponent />
        <GroupComponent />
        <PlacesComponent />
        <MessageComponent />
        <Footer />
    </div>
  )
}

export default HomePage