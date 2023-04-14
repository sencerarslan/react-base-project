import { axiosClient } from "../";
class PostsService {
  async getProduct() {
    return axiosClient.get("/users");
  }
  async postProduct(id: string) {
    return axiosClient.get("/posts/" + id);
  }
}

const postsService = new PostsService();

export default postsService;
