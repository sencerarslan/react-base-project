import { axiosClient } from "..";
class PostsService {
  async postProduct(query: string) {
    return axiosClient.get("/airports?output=json&results=100&query=" + query);
  }
}

const postsService = new PostsService();

export default postsService;
