import axios from "axios";
import { Image } from "./App.types";

interface AxiosGetData {
  results: Image[];
  total: number;
  total_pages: number;
}

export const requestPhotoByKey = (keyWord: string, page: number) => {
  const axiosParams = {
    params: {
      page: page,
      per_page: 12,
      query: keyWord,
      orientation: "landscape",
      client_id: "QSXdgCLjwWgudcJDVdarJiNqu-yjS60eiqMxbV-yU0I",
    },

    baseURL: "https://api.unsplash.com/",
  };

  return axios.get<AxiosGetData>("/search/photos", axiosParams);
};
