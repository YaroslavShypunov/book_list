'use client';
import React, { ReactNode, useRef } from 'react';
import Modal from './modal';
import useClickOutside from '@/hooks/use-click-outside';

interface IPopup {
  children: ReactNode;
  open: boolean;
  title?: string;
  onClose: () => void;
}

const Popup = ({ children, open, title, onClose = () => {} }: IPopup) => {
  const popupRef = useRef(null);

  useClickOutside(popupRef, onClose);

  if (!open) {
    return null;
  }
  return (
    <Modal>
      <section className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
        <div
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          ref={popupRef}
        >
          <div className="sm:flex sm:items-start px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="font-semibold">{title}</h3>
              <div className="mt-2">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default React.memo(Popup);
