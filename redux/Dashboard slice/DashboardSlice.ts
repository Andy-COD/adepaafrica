import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const dashBoardSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = dashBoardSlice.actions;
export default dashBoardSlice.reducer;
