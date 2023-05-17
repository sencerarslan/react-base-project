import { createSlice } from "@reduxjs/toolkit";
// import postsService from "../../services/blockchain/index.api";

// export const getCartItems: [] = createAsyncThunk("cart/getCartItems", () => {
//   return postsService.getProduct().then(function (response) {
//     return response.data;
//   });
// });
const initialState = {
  userData: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveItems: (state, { payload }) => {
      state.userData = payload;
    },
    clearItems: (state, { payload }) => {
      const itemId = payload;
      state.userData = state.userData.filter((item: any) => item.id !== itemId);
    },
  },
});

export const { saveItems, clearItems } = userSlice.actions;
export default userSlice.reducer;
