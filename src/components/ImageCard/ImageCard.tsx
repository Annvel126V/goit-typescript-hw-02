import React, { FC } from "react";
import s from "./ImageCard.module.css";
import { Image } from "../../servises.api";

// Інтерфейс для типізації пропсів компонента
interface ImageCardProps {
  img: Image;
}
// Типізований функціональний компонент
const ImageCard: FC<ImageCardProps> = ({ img }) => {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={img.urls.small}
        alt={img.alt_description || "image"}
        width="300"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
