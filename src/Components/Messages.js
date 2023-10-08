import React from 'react'
import ChatPage from './ChatPage';
import MessageBox from './MessageBox';


const Messages = () => {
  return (
    <div className="flex justify-between">
      <div className="w-4/12 border border-gray-500 z-10">
        <ChatPage />
        </div>
        <div className="w-8/12 border-l-2 border-gray-500">
        <MessageBox />
      </div>
      </div>
  )
};

export default Messages