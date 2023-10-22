import React, { useState } from 'react'
import ChatPage from './ChatPage';
import MessageBox from './MessageBox';
import NoMessage from './NoMessage';


const Messages = () => {
  const [showMsg, setShowMsg] = useState(false);

  const handleMsgShow = ()=>{
    setShowMsg(true);
  }
  return (
    <div className="flex justify-between">
      <div className="w-4/12 border border-gray-500 z-10" onClick={handleMsgShow}>
        <ChatPage />
        </div>
        {showMsg ? (<div className="w-8/12 border-l-2 border-gray-500">
        <MessageBox />
      </div>) : 
      <div className='w-8/12 border-l-2 border-gray-500'>
      <NoMessage /> 
      </div>}
      </div>
  )
};

export default Messages