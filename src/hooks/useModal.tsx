import { useState, useEffect } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      isUserModalOpen &&
      target instanceof Element &&
      !target.closest("#modal")
    ) {
      setIsUserModalOpen(false);
    }
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isUserModalOpen) {
      setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
      }, 100);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isUserModalOpen]);

  return {
    isUserModalOpen,
    setIsUserModalOpen,
    isModalOpen,
    handleOpen,
    handleClose,
  };
};

export default useModal;
