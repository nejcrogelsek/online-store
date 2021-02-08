import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cat_subcatReducer from "../features/cat_subcat/cat_subcatSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cat_subcat: cat_subcatReducer,
  },
});
