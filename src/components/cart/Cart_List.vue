<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
        <CartListItem :cartItem="cartItem" />
      </li>
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br />
    </ul>
    <div class="buttons">
      <button :disabled="!cartItems.length" class="button is-info">
        Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span
        >)
      </button>

      <button class="button is-danger is-outlined" @click="removeAllCartItems">
        <span>Delete All items</span>
        <span class="icon is-small">
          <i class="fas fa-times"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CartListItem from "./Card_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("getCartItems");
    const cartItems = computed(() => store.getters.cartItems);
    const cartTotal = computed(() => store.getters.cartTotal);
    const cartQuantity = computed(() => store.getters.cartQuantity);
    const removeAllCartItems = () => store.dispatch("removeAllCartItems");
    return {
      removeAllCartItems,
      cartItems,
      cartTotal,
      cartQuantity,
    };
  },
};
</script>
