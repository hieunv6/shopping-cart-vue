<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/inventory" class="button is-primary">
              <strong> Inventory</strong>
            </router-link>
            <router-link to="/cart" class="button is-warning">
              <p>
                Total cart items:
                <span> {{ cartQuantity }}</span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();
    store.dispatch("getCartItems");
    return {
      cartQuantity: computed(() => store.getters.cartQuantity),
    };
  },
};
</script>
