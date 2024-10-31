import React, { useEffect, FC } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

// Інтерфейс для типізації пропсів компонента ImageModal
interface ImageModalProps {
  isOpen: boolean; // Чи відкрите модальне вікно
  imageUrl: string; // URL зображення, яке буде відображене в модальному вікні
  onClose: () => void; // Функція для закриття модального вікна
  altText?: string; // Опис зображення
}
// Типізований функціональний компонент ImageModal
const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  altText = "Image",
}) => {
  // Використання хука useEffect для обробки події натискання клавіші Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Видалення обробника події при розмонтуванні компонента
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
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
