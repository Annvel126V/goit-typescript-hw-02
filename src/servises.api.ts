import axios from "axios";

// Інтерфейси для типізації відповіді від API Unsplash
interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchDataResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

// Типізована HTTP-функція fetchData
export const fetchData = async (
  query: string,
  page: number = 1
): Promise<FetchDataResponse> => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: "FnIh09jq3j3Ac6b--DyShlDBejsP3o-qnNf1-JpvqCk",
    },
  });

  return data;
};
