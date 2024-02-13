import { useState } from "react";

const useModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onCancel = () => {
    closeModal();
  };

  const onLeave = () => {
    // Do something to leave the page
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    onCancel,
    onLeave,
  };
};
export default useModalPage;
