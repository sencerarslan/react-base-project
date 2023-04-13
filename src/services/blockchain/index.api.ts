import { axiosClient, axiosClient2 } from "../";

export function getProduct() {
  return axiosClient.get("/posts");
}
export function postProduct(id: number) {
  return axiosClient2.get("/posts/" + id);
}
