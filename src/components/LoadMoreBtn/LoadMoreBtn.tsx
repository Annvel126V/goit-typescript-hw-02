import React, { FC } from "react";
import s from "./LoadMoreBtn.module.css";

// Інтерфейс для пропсів компонента LoadMoreBtn
interface LoadMoreBtnProps {
  onClick: () => void; // Функція обробки кліку, яка не приймає аргументів і не повертає значення
}

// Типізований функціональний компонент LoadMoreBtn
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
