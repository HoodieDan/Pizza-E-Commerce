<template>
  <aside class="cart">
    <div class="head">
      <button class="close-modal btn" @click="toggleCart">
        <i class="fa-solid fa-xmark" />
      </button>
      <h2 class="brown semi-bold">
        CART
      </h2>
    </div>
  </aside>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  emits: ['toggle-cart'],
  methods: {
    toggleCart () {
      this.$emit('toggle-cart')
    }
  }
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  width: min(75vw, 400px);
  height: 70%;
  right: 0;
  top: 0;
  background: url('../assets/images/cart-bg.png') no-repeat;
  background-color: #FFF;
  background-position: center center;
  color: #5D3801;
  text-align: center;
  transform: translateX(1000px);
  z-index: 20;
  padding: 80px 10px;
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
</style>
