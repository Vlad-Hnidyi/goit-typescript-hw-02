import axios from "axios";

export const requestPhotoByKey = (keyWord, page) => {
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

  return axios.get("/search/photos", axiosParams);
};
