import React, { FC, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { BiSearchAlt } from "react-icons/bi";

// Інтерфейс для пропсів компонента SearchBar
interface SearchBarProps {
  onSearch: (query: string) => void;
}

// Інтерфейс для типізації пропсів компонента SearchBar
const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const qeryInput = form.elements.namedItem("query") as HTMLInputElement;
    const query = qeryInput.value.trim();

    if (query === "") {
      toast.error("Enter a search query");
      return;
    }

    onSearch(query);
    form.reset();
  };
  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form__wrapper}>
          <button type="submit" className={s.button}>
            <BiSearchAlt size={30} />
          </button>
          <input
            name="query"
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
