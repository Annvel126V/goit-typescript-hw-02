import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
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
    </>
  );
};

export default ImageGallery;
