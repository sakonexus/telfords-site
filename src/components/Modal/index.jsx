import React, { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[111] flex items-center justify-center bg-black/50 backdrop-blur-sm flex-col">
      <div className="w-full md:w-3/4 flex justify-end py-4 px-4 md:px-0 bg-cream md:bg-transparent">
        <button
          onClick={onClose}
          className="z-[99] hover:cursor-pointer transition-all hover:bg-slate-200 durtation-300 rounded-full p-1"
        >
          <XMarkIcon className="w-8 h-8 stroke-slate-800" />
        </button>
      </div>
      <div
        ref={modalRef}
        className="
          rounded-none md:rounded-2xl 
          w-full h-full md:w-3/4 md:h-auto 
          shadow-xl overflow-auto bg-cream p-0 md:p-6
        "
      >
        <div className="relative flex items-stretch h-full justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
