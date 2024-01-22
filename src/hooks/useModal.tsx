import { useState, useEffect } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;
    if (isModalOpen && target instanceof Element && !target.closest("#modal")) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        window.addEventListener("click", handleOutsideClick);
      }, 100);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return { isModalOpen, setIsModalOpen };
};

export default useModal;
