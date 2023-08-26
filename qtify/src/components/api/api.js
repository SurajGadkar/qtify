/* https://qtify-backend-labs.crio.do/albums/top
https://qtify-backend-labs.crio.do/albums/new */
import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";

const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/new`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchTopSongs, fetchNewAlbums };
