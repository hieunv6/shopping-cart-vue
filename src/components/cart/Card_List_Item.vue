<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{ cartItem.price }} X {{ cartItem.quantity }}
        </span>
        <span>
          <button
            class="fa fa-arrow-circle-up cart-item__modify"
            @click="addCartItem(cartItem)"
          >
            Add
          </button>
          <button
            class="fa fa-arrow-circle-down cart-item__modify"
            @click="removeCartItem(cartItem)"
          >
            Remove
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
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
    return {
      addCartItem,
      removeCartItem,
    };
  },
};
</script>
