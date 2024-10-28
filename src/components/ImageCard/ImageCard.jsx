import s from "./ImageCard.module.css";
const ImageCard = ({ img }) => {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={img.urls.small}
        alt={img.alt_description}
        width="300"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
