import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;