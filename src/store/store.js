import { configureStore } from "@reduxjs/toolkit";
import products from "./products";


export default configureStore({
  reducer: {
    products : products,
  },
});

