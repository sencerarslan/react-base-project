import { axiosClient } from "../";

export function getProduct() {
  return axiosClient.get("/posts");
}
export function postProduct(id: number) {
  return axiosClient.get("/posts/" + id);
}
