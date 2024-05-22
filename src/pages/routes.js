import { createRouter } from "vue-router";
import Home from "./home/Home.vue";
import Products from "./products/Products.vue";
import ProductDetails from "./product-details/ProductDetails.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products/",
    component: Products,
  },
  {
    path: "/product/:id/",
    component: ProductDetails,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
