<template>
  <div
    class="backdrop"
    :class="{'no-scroll-lg': cartIsOpen}"
    @wheel.self.prevent
    @touchmove.self.prevent
    @scroll.self.prevent
    @touch.self="toggleCart"
    @click.self="toggleCart"
  >
    <div class="cart-container">
      <aside
        v-show="pizzaItemsLength === 0
          && drinksItemsLength === 0
          && sidesItemsLength === 0
          && dessertItemsLength === 0"
        class="cart empty"
      >
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

      <aside
        v-show="pizzaItemsLength > 0
          || drinksItemsLength > 0
          || sidesItemsLength > 0
          || dessertItemsLength > 0"
        class="cart"
      >
        <div class="head">
          <button class="close-modal btn" @click="toggleCart">
            <i class="fa-solid fa-xmark" />
          </button>
          <h2 class="brown semi-bold cart-header">
            CART
          </h2>
          <div class="items">
            <div v-for="(cartItem, index) in cartItems.pizza" :key="index" class="cart-card d-flex">
              <div class="image">
                <img :src="cartItem.image" alt="selected pizza" class="cart-pizza-pic">
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
                  <h5 class="semi-bold">
                    N{{ cartItem.total }}
                  </h5>
                </div>
              </div>
            </div>
            <div v-for="(cartItem, index) in cartItems.drink" :key="index" class="cart-card d-flex">
              <div class="image">
                <img :src="cartItem.image" alt="selected drink" class="cart-pizza-pic">
              </div>
              <div class="order">
                <button class="btn remove-pizza" @click="removeFromCart(cartItem)">
                  x
                </button>
                <h5 class="semi-bold">
                  {{ cartItem.name }}
                </h5>
                <p>{{ cartItem.description }}</p>
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
                  <h5 class="semi-bold">
                    N{{ cartItem.price }}
                  </h5>
                </div>
              </div>
            </div>
            <div v-for="(cartItem, index) in cartItems.sides" :key="index" class="cart-card d-flex">
              <div class="image">
                <img :src="cartItem.image" alt="selected side" class="cart-pizza-pic">
              </div>
              <div class="order">
                <button class="btn remove-pizza" @click="removeFromCart(cartItem)">
                  x
                </button>
                <h5 class="semi-bold">
                  {{ cartItem.name }}
                </h5>
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
                  <h5 class="semi-bold">
                    N{{ cartItem.price }}
                  </h5>
                </div>
              </div>
            </div>
            <div v-for="(cartItem, index) in cartItems.desserts" :key="index" class="cart-card d-flex">
              <div class="image">
                <img :src="cartItem.image" alt="selected dessert" class="cart-pizza-pic">
              </div>
              <div class="order">
                <button class="btn remove-pizza" @click="removeFromCart(cartItem)">
                  x
                </button>
                <h5 class="dessert-name semi-bold">
                  {{ cartItem.name }}
                </h5>
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
                  <h5 class="semi-bold">
                    N{{ cartItem.price }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-bottom">
          <div class="total">
            <p>Total:</p>
            <h2 class="brown semi-bold">
              N{{ itemTotal }}
            </h2>
          </div>
          <div class="checkout">
            <nuxt-link to="/CheckoutPage">
              <button class="btn">
                CHECKOUT
              </button>
            </nuxt-link>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'CartPage',
  computed: {
    ...mapGetters(['pizzaItemsLength', 'drinksItemsLength', 'itemTotal', 'sidesItemsLength', 'dessertItemsLength']),
    ...mapState(['cartItems', 'cartIsOpen'])
  },
  methods: {
    ...mapMutations(['removeFromCart', 'toggleCart', 'reduceQuantity', 'increaseQuantity'])
  }
}
</script>

<style scoped>
div.backdrop {
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
}
aside.cart {
  box-shadow: 0px 1px 6px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: min(75vw, 400px);
  height: 100%;
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
  margin-top: 25vh !important;
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
  max-height: 80px;
  max-width: 80px;
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
div.head {
  height: 100% !important;
}
div.items {
  overflow-y: auto;
  height: 65% !important;
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
h5.dessert-name {
  width: 70%;
}
div.cart-bottom {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
}
div.checkout {
  margin-left: 20%;
}
@media (min-width: 400px) {
  div.checkout {
    margin-left: 30%;
  }
}
@media (min-width: 575px) {
  div.checkout {
    margin-left: 55%;
  }
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
