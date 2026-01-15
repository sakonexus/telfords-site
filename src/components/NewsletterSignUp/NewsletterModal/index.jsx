import Modal from '@components/Modal';
import { useState } from 'react';
import NewsletterSignUp from '..';

const NewsletterModal = ({ initialPopup = false }) => {
  const [openModal, setOpenModal] = useState(initialPopup || false);

  return (
    <Modal isOpen={openModal} onClose={() => setOpenModal(false)} notFullScreen>
      <div id="newsletter-modal" className="pb-12">
        <NewsletterSignUp />
      </div>
    </Modal>
  );
};

export default NewsletterModal;
