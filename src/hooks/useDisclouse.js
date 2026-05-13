import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
