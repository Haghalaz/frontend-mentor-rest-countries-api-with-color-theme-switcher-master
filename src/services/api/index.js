import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

const get = (url) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading, mutate } = useSWR(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    { refreshInterval: 100 }
  );
  return { data, error, isLoading, mutate };
};

const post = async (url, postData) => {
  try {
    const response = await api.post(url, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const patch = async (url, patchData) => {
  try {
    const response = await api.patch(url, patchData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const remove = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const apiService = {
  get,
  post,
  patch,
  remove,
};

export default apiService;
