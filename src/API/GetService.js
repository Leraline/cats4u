import axios from "axios";

export default class GetService {
    static async getAlbumById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        return response;
    }

    static async getPhotoById(photoId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        const content = await response.data.url;
        console.log(content);
        return toString(content);
    }


}
