import React from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-4 rounded-md shadow-lg z-10 relative">
        <button onClick={onClose} className="absolute right-12 top-12 text-white">
         <AiOutlineCloseCircle size={36}/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;