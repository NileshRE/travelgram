import React from 'react'
import { Images } from '../Utils/constants'
import { useSelector } from 'react-redux'
import lang from '../Utils/LanguageConstants'

const FeedComponent = () => {
    const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-500 text-white">
    <p className="text-2xl font-semibold py-10 px-12">{lang[langkey].feedHeading}</p>
    <div className="flex mx-16">
    <div className="w-[25vw]">
        <div className="py-12">
            <img className="rounded-md -rotate-12" src={Images.feed_1} alt="feed-1"/>
        </div>
        <p className="text-xl font-md pt-40">A travel feed like Instagram feed where people can share stories, and short videos.</p>
    </div>
    <div className="grid ml-64">
    <div>
        <div className="flex p-4 border rounded-md">
            <div className="w-16 h-16">
            <img src={Images.dp} alt="dp"/>
            </div>
            <p className="text-sm w-[40vw] pl-2">“Kashi is a must visit place in Northern India. I spent amazing 5 days spent there. There were amazing scenes of sunrise and sunset. The chants of evening aarti gave peace to the soul and comfort to the eyes. Paans and chats of Varanasi is a must to have.”</p>
        </div>
    </div>
    <div className="p-4 border rounded-md w-[32vw] my-16 ml-16 rotate-6">
        <div>
            <div className="object-fill">
                <img src={Images.feed_2} alt="feed-2"/>
            </div>
            <div className="flex mt-4">
            <div className="w-16 h-16">
            <img src={Images.dp2} alt="dp"/>
            </div>
            <p className="text-sm w-[40vw] pl-2">“Most beautiful and peaceful temple in South India. It was around 
half hour from our stay. The vibes at morning time was truly 
unforgettable and once in a lifetime experience.”</p>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FeedComponent