<template>
  <div class="cart-container">
    <aside v-show="cartItemsLength === 0" class="cart empty">
      <div class="head">
        <button class="close-modal btn" @click="toggleCart">
          <i class="fa-solid fa-xmark" />
        </button>
        <h2 class="brown semi-bold cart-header">
          CART
        </h2>
        <div class="cart-bg text-center my-auto">
          <img src="../assets/images/cart-bg.png" alt="empty cart bg">
          <h2 class="brown semi-bold">
            Cart is Empty!
          </h2>
        </div>
      </div>
    </aside>

    <aside v-show="cartItemsLength > 0" class="cart">
      <div class="head">
        <button class="close-modal btn" @click="toggleCart">
          <i class="fa-solid fa-xmark" />
        </button>
        <h2 class="brown semi-bold cart-header">
          CART
        </h2>
        <div class="items">
          <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-card d-flex">
            <div class="image">
              <img src="../assets/images/cart-pizza-pic.png" alt="selected pizza" class="cart-pizza-pic">
            </div>
            <div class="order">
              <button class="btn remove-pizza" @click="removeFromCart(cartItem)">
                x
              </button>
              <h5 class="semi-bold">
                {{ cartItem.name }}
              </h5>
              <p>{{ cartItem.size }}, <span v-for="(topping, i) in cartItem.toppings" :key="i"> {{ topping.name }},</span></p>
            </div>
            <div class="quantity-and-price">
              <div class="quantity d-flex">
                <button class="white-btn-outline" @click="reduceQuantity(cartItem)">
                  -
                </button>
                <p class="pizza-quantity">
                  {{ cartItem.quantity }}
                </p>
                <button class="brown-btn-outline" @click="increaseQuantity(cartItem)">
                  +
                </button>
              </div>
              <div class="price">
                <h5 v-if="cartItemTotal" class="semi-bold">
                  N{{ cartItemTotal }}
                </h5>
              </div>
            </div>
          </div>
          <p>total : N{{ itemTotal }}</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'CartPage',
  computed: {
    ...mapGetters(['cartItemsLength', 'itemTotal', 'cartItemTotal']),
    ...mapState(['cartItems'])
  },
  methods: {
    ...mapMutations(['removeFromCart', 'toggleCart', 'reduceQuantity', 'increaseQuantity'])
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
  background-color: #FFF;
  background-position: center center;
  border-radius: 5px;
  color: #5D3801;
  transform: translateX(1000px);
  z-index: 20;
  padding: 10px 10px;
  overflow-y: initial !important;
  overflow-x: hidden;
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
aside.cart.empty {
  z-index: 20;
}
div.cart-bg {
  vertical-align: middle;
}
div.cart-card {
  width: 95%;
  height: 100px;
  border: #DED8D8 1px solid;
  border-radius: 5px;
  position: relative;
  padding: 10px;
  margin: 20px 0;
}
img.cart-pizza-pic {
  height: 80px;
  width: 80px;
  margin-right: 10px;
}
div.quantity-and-price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
div.quantity {
  position: absolute;
  top: 10px;
  right: 15px;
}
.white-btn-outline {
    border-radius: 5px;
    background-color: #FFF;
    border: #5D3801 1px solid;
    color: #5D3801;
    padding: 0;
    width: 20px;
    height: 20px;
    line-height: 10px;
}
.brown-btn-outline {
    border-radius: 5px;
    background-color: #5D3801;
    border: #FFF 1px solid;
    color: #FFF;
    width: 20px;
    height: 20px;
    line-height: 15px;
    display: flex;
    justify-content: center;
}
p.pizza-quantity {
  margin: 0 5px;
}
div.price {
  position: absolute;
  bottom: 0px;
  right: 15px;
}
div.items {
  overflow-y: auto;
}
.btn.remove-pizza {
  height: 20px;
  width: 5px;
  display: flex;
  justify-content: center;
}
button.remove-pizza {
  position: absolute;
  top: -10px;
  right: -10px;
  line-height: 1px;
  z-index: 101;
}
button:focus,
button:hover,
button.active {
    outline: solid 2px #58EE9E;
}
@media (max-width: 768px) {
  aside.cart {
    height: 100%;
  }
  div.cart-card {
    height: 150px;
  }
  div.quantity {
    align-items: flex-end;
    bottom: 10px;
    left: 10px;
  }
}
</style>
