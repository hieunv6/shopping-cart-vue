import { createStore } from "vuex";
import product from "./module/product/index";
import cart from "./module/cart/index";

export default createStore({
  modules: {
    product,
    cart,
  },
});
