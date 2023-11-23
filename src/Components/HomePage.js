import React, { Suspense, lazy } from 'react'
import HeroComponent from './HeroComponent'
import FeedComponent from './FeedComponent'
import PlacesComponent from './PlacesComponent'
import MessageComponent from './MessageComponent'
import Footer from './Foter'

const Group = lazy(()=>import("./GroupComponent"))
const HomePage = () => {
  return (
    <div>
        <HeroComponent />
        <FeedComponent />
        <Suspense fallback={<div>Loading Group...</div>}>
        <Group />
          </Suspense>
        <PlacesComponent />
        <MessageComponent />
        <Footer />
    </div>
  )
}

export default HomePage