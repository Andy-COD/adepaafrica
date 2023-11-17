import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
  isLoading: true
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // showModal: (state) => {
    //   state.isOpen = true;
    // },
    // hideModal: (state) => {
    //   state.isOpen = false;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {  } = cartSlice.actions;
export default cartSlice.reducer;