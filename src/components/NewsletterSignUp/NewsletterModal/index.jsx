import Modal from '@components/Modal';
import { useState } from 'react';
import NewsletterSignUp from '..';

const NewsletterModal = ({ initialPopup }) => {
  const [openModal, setOpenModal] = useState(initialPopup || false);

  return (
    <Modal isOpen={openModal} onClose={() => setOpenModal(false)} notFullScreen>
      <div className="pb-12">
        <NewsletterSignUp />
      </div>
    </Modal>
  );
};

export default NewsletterModal;
