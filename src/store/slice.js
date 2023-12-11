import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayMessage: "Amazon",
  mesageList: ["amazon", "flipkart", "microdoft", "amazon", "amzon"],
  FavMessages: [],
  SendMessages: [],
};

export const messageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDisplayMessage: (state, action) => {
      state.displayMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDisplayMessage } = messageSlice.actions;

export default messageSlice.reducer;
