import React, { FC } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import s from "./Loader.module.css";

// Інтерфейс для типізації пропсів компонента Loader
interface LoaderProps {}

// Типізований функціональний компонент Loader
const Loader: FC<LoaderProps> = () => {
  return (
    <div className={s.loader}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
