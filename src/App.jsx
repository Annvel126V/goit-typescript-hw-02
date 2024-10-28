import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "./servises.api";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (query === "") {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchData(query, page);

        if (page === 1) {
          setImages(response.results);
        } else {
          setImages((prevImages) => [...prevImages, ...response.results]);
        }
      } catch (error) {
        toast.error(error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleOpenModal = (imageUrl) => {
    setIsModalOpen(true);
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const loadMore = () => {
    handleLoadMore();
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
        <LoadMoreBtn onClick={loadMore} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
