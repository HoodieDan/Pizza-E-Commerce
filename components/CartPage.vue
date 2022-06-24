<template>
  <aside class="cart">
    <div class="head">
      <button class="close-modal btn" @click="toggleCart">
        <i class="fa-solid fa-xmark" />
      </button>
      <h2 class="brown semi-bold cart-header">
        CART
      </h2>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'CartPage',
  emits: ['toggle-cart'],
  methods: {
    toggleCart () {
      this.$emit('toggle-cart')
    }
  }
}
</script>

<style scoped>
aside.cart {
  box-shadow: 0px 1px 6px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: min(75vw, 400px);
  height: 70%;
  right: 0;
  top: 0;
  background: url('../assets/images/cart-bg.png') no-repeat;
  background-color: #FFF;
  background-position: center center;
  border-radius: 5px;
  color: #5D3801;
  transform: translateX(1000px);
  z-index: 20;
  padding: 10px 10px;
  animation: show 0.5s linear forwards;
}
@keyframes show {
  from {
    transform: translateX(1000px);
  }
  to {
   transform: translateX(0px);
  }
}
.leave-animation {
  animation: leave 0.5s linear backwards !important;
}
@keyframes leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(1000px);
  }
}
.invisible {
  opacity: 0;
}
button.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
}
h2.cart-header {
  margin-top: 40px;
  margin-left: 10px;
}
aside.cart:after {
  margin: 80% auto;
  font-size: 1.75rem;
  content: "Cart is Empty!";
  color: #5D3801;
  z-index: -1;
}
@media (max-width: 768px) {
  aside.cart {
    height: 100%;
  }
}
</style>
