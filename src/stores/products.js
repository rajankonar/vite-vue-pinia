import axios from "axios";
import { defineStore } from "pinia";

export const useProducts = defineStore("products-store", {
  persist: true,
  state: () => {
    return {
      products: [],
      fetching: false,
    };
  },
  getters: {
    productStore(state) {
      return state.products;
    },
    getProductById: (state) => {
      return (id) => state.products.find((p) => p.id == id);
    },
    isFetching(state) {
      return state.fetching;
    },
  },
  actions: {
    async fetchProducts() {
      this.fetching = true;
      const response = await axios.get("https://dummyjson.com/products");
      if (response.status === 200) {
        this.products = response.data.products;
      }
      this.fetching = false;
    },
  },
});
