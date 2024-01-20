import { useState } from "react";

const useModalOpen = () => {
  const [issModalOpen, setModalOpen] = useState(false);

  const handleModalClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return {
    issModalOpen,
    handleModalClick,
    handleCloseModal,
  };
};

export default useModalOpen;
