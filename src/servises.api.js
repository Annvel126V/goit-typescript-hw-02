import axios from "axios";

export const fetchData = async (query, page = 1) => {
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
