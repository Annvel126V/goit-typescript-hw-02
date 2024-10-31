import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "./servises.api";

// Інтерфейси для типу зображення
interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

// Типи стану
type ImagesState = Image[];
type SelectedImage = {
  url: string;
  alt: string;
} | null;

const App: React.FC = () => {
  const [images, setImages] = useState<ImagesState>([]);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  // Функція для запиту зображень
  useEffect(() => {
    const fetchImages = async () => {
      if (query === "") return;

      try {
        setIsLoading(true);
        setError(false);

        const response = await fetchData(query, page);

        if (page === 1) {
          setImages(response.results);
        } else {
          setImages((prevImages) => [...prevImages, ...response.results]);
        }
      } catch (error: any) {
        toast.error(error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  // Функції обробників подій із типізацією
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (imageUrl: string, altDescription: string) => {
    setIsModalOpen(true);
    setSelectedImage({ url: imageUrl, alt: altDescription });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && !error && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={selectedImage.url}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default App;
