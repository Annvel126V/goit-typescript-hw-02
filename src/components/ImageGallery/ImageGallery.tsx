import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

// Інтерфейс для типізації об'єкта зображення
interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

// Інтерфейс для типізації пропсів компонента ImageGallery
interface ImageGalleryProps {
  images: Image[]; // Масив зображень
  onOpenModal: (url: string, alt: string) => void; // Функція відкриття модального вікна
}

// Типізований функціональний компонент ImageGallery

const ImageGallery: FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <li
          className={s.image}
          key={img.id}
          onClick={() => onOpenModal(img.urls.regular, img.alt_description)}
        >
          <ImageCard img={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
