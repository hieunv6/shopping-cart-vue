<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{ cartItem.price }}
        </span>
        <div class="product-variant-quanlity flex">
          <div class="previous">
            <button @click="removeCartItem(cartItem)">-</button>
          </div>
          <div class="center">
            <input type="number" :value="cartItem.quantity" />
          </div>
          <div class="next">
            <button @click="addCartItem(cartItem)">+</button>
          </div>
          <div>Checkout {{ cartTotalItem(cartItem) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  // methods: {
  //   ...mapActions(["addCartItem", "removeCartItem"]),
  // },
  setup() {
    const store = useStore();
    const addCartItem = (cartItem) => {
      store.dispatch("addCartItem", cartItem);
    };
    const removeCartItem = (cartItem) => {
      store.dispatch("removeCartItem", cartItem);
    };
    const cartTotalItem = computed(() => store.getters.cartTotalItem);
    return {
      addCartItem,
      removeCartItem,
      cartTotalItem,
    };
  },
};
</script>
<style>
.product-variant-quanlity {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  width: 152px;
}
.product-variant-quanlity button {
  width: 50px;
  height: 32px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  border: none;
}
.product-variant-quanlity input {
  width: 50px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  outline: none;
  cursor: text;
  text-align: center;
  line-height: 65px;
  border-top: none;
  border-bottom: none;
  -webkit-appearance: none;
  margin: 0;
}
</style>
