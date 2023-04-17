import { axiosClient } from "../";
class PostsService {
  async getAllGames() {
    return axiosClient.get("/games");
  }
  async postProduct(id: string) {
    return axiosClient.get("/users/" + id);
  }
}

const postsService = new PostsService();

export default postsService;
