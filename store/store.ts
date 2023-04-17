import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productsState = {
  products: [],
  cart: [],
  totalPrice: 0,
  loading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",

  initialState: productsState,

  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.title === action.payload
      );
      if (!product) {
        return;
      }
      const existingProduct = state.cart.find(
        (cartItem) => cartItem.title === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.total =
          existingProduct.quantity * existingProduct.price;
      } else {
        let quantity = 1;
        let total = quantity * product.price;
        let addedProduct = {
          ...product,
          quantity,
          total,
        };
        state.cart.push(addedProduct);
      }
    },

    removeFromCart: (state, action) => {
      state.cart.forEach((product, i) => {
        if (product.title === action.payload) {
          state.cart.splice(i, 1);
        }
      });
    },

    increaseProduct: (state, action) => {
      state.cart.forEach((product) => {
        if (product.title === action.payload) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
      });
    },

    decreaseProduct: (state, action) => {
      state.cart.forEach((product, i) => {
        if (product.title === action.payload) {
          if (product.quantity === 1) {
            state.cart.splice(i, 1);
          } else {
            product.quantity--;
            product.total = product.quantity * product.price;
          }
        }
      });
    },

    getTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce((acc, item) => {
        return acc + item.total;
      }, 0);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      console.log(state.products);
    });
    builder.addCase(getProducts.rejected, (state, action) => {});
  },
});
//ss

export const store = configureStore({
  reducer: { products: productsSlice.reducer },
});

export const productsActions = productsSlice.actions;
