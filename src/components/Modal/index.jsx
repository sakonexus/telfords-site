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
    <div className="fixed inset-0 z-[111] flex items-center justify-start bg-black/50 backdrop-blur-sm flex-col">
      <div
        ref={modalRef}
        className="
          rounded-none md:rounded-md 
          w-full h-full md:w-2xl md:h-auto 
          shadow-xl overflow-auto bg-cream md:mt-10 xs:mt-0
        "
      >
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="z-[99] hover:cursor-pointer transition-all bg-cream durtation-200 rounded-full p-1 m-2 absolute opacity-60 hover:opacity-100"
          >
            <XMarkIcon className="w-7 h-7 stroke-text-primary" />
          </button>
        </div>
        <div className="relative flex items-stretch h-full justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
