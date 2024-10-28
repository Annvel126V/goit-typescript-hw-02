import Modal from "react-modal";
import s from "./ImageModal.module.css";
// import { useEffect } from "react";
Modal.setAppElement("#root");
const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       onClose();
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }),
  //   [onClose];
  return (
    <>
      <Modal
        className={s.modal}
        overlayClassName={s.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className={s.modalContent}>
          <img className={s.img} src={imageUrl} alt="close button" />
          <button className={s.closeBtn} onClick={onClose}></button>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
