import axios from "axios";

export default class GetService {
    static async getAlbumById(id) {
      return await axios
        .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((response) => response.data);
    }
  
    static async getPhotoById(photoId) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${photoId}`
      );
      const content = await response.data.url;
  
      return toString(content);
    }
  }
