import Modal from '@components/Modal';
import { useState } from 'react';
import NewsletterSignUp from '..';

const NewsletterModal = ({ initialPopup }) => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <Modal
      isOpen={initialPopup ? initialPopup : openModal}
      onClose={() => setOpenModal(false)}
    >
      <NewsletterSignUp />
    </Modal>
  );
};

export default NewsletterModal;
