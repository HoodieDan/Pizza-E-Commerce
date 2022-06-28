<template>
  <nav>
    <div class="navis container">
      <div class="branding">
        <nuxt-link class="navbar-brand text-white" to="/">
          HOME
        </nuxt-link>
      </div>
      <div class="mid-nav-links mx-auto">
        <ul class="navbar-navi">
          <li class="navbar-item">
            <nuxt-link class="navi-link text-white" to="/pizzas">
              PIZZAS
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link class="navi-link text-white" to="/drinks">
              DRINKS
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link class="navi-link text-white" to="/sides">
              SIDES
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link class="navi-link text-white" to="/desserts">
              DESSERTS
            </nuxt-link>
          </li>
          <li class="navbar-item">
            <nuxt-link class="navi-link text-white" to="/pastas">
              PASTAS
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="right-nav-links ml-auto">
        <!-- Shopping cart -->
        <button class="btn" @click="toggleCart">
          <i class="font-awesome fa-solid fa-cart-shopping" />
        </button>
        <!-- sign in -->
        <button class="btn sign-in" @click.prevent="toggleSignIn">
          <span class="button-text">Sign In</span>
          <i class="font-awesome sign-in-icon fa-solid fa-arrow-right-to-bracket" />
        </button>
        <!-- nav menu -->
        <button
          class="navbar-toggle"
          :class="{ 'increase-index': navIsOpen }"
          type="button"
          aria-label="Toggle navigation"
          @click="toggleNav"
        >
          <span
            class="toggler-icon top-bar"
            :class="{ 'top-icon-animate': navIsOpen }"
          />
          <span
            class="toggler-icon middle-bar"
            :class="{ 'middle-icon-animate': navIsOpen }"
          />
          <span
            class="toggler-icon bottom-bar"
            :class="{ 'bottom-icon-animate': navIsOpen }"
          />
        </button>
      </div>
    </div>

    <!-- mobile navigation  -->
    <div
      v-show="navIsOpen"
      class="backdrop"
      @wheel.self.prevent
      @touchmove.self.prevent
      @scroll.self.prevent
      @touch.self="toggleNav"
      @click.self="toggleNav"
    >
      <aside class="mobile-nav" :class="{ 'leave-animation': navIsOpen === false, 'invisible': clicked === 0, }">
        <a class="navbar-link mono block" href="#">PIZZAS</a>
        <a class="navbar-link mono block" href="#">DRINKS</a>
        <a class="navbar-link mono block" href="#">SIDES</a>
        <a class="navbar-link mono block" href="#">DESSERTS</a>
        <a class="navbar-link mono block" href="#">PASTAS</a>
      </aside>
    </div>

    <SignInVue v-show="signInIsOpen" @toggle-sign="toggleSignIn" />
    <cart-page v-show="cartIsOpen" />
  </nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SignInVue from '../SignIn.vue'
import CartPage from '../CartPage.vue'

export default {
  name: 'AppHeader',
  components: { SignInVue, CartPage },
  props: {
    navIsOpen: Boolean,
    signInIsOpen: Boolean
  },
  emits: ['toggle-nav', 'toggle-sign-in'],
  data () {
    return {
      clicked: 0
    }
  },
  computed: {
    ...mapState(['cartIsOpen'])
  },
  methods: {
    ...mapMutations(['toggleCart']),
    toggleNav () {
      this.$emit('toggle-nav')
      this.clicked = 1
    },
    toggleSignIn () {
      this.$emit('toggle-sign-in')
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  position: relative;
}
nav {
  font-family: 'Hellix-Regular';
  background-color: #5D3801;
  color: #FFF !important;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  padding: 15px;
}
div.navis {
  width: 100%;
  display: flex;
}
div.branding {
  margin: auto 0;
}
div.mid-nav-links {
  position: relative;
  left: 100px;
}.mid-nav-links {
  display: flex;
  align-items: center;
}
.right-nav-links {
  padding: 7px 0px;
  display: flex;
  position: relative;
  right: 100px;
}
ul.navbar-navi {
  display: flex;
  justify-content: space-between;
  position: relative;
  right: 200px;
}
li.navbar-item {
  margin-right: 15%;
  color: #FFF !important;
}
.button-text {
  padding: 0px 15px !important;
}
.font-awesome {
  padding: 10px;
}
div button {
  margin-left: 10px;
}
.navbar-link {
  color: #FFF;
}
.navbar-link:hover,
.navbar-link:focus,
.navbar-link.active {
  color: #58EE9E;
}
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
aside.mobile-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  width: min(75vw, 400px);
  height: 100%;
  right: 0;
  top: 0;
  background-color: #5D3801;
  color: #FFF;
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
.toggler-icon {
  display: block;
  display: none;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #58EE9E;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
button.navbar-toggle {
  background-color: #5D3801;
  border-style: none;
  display: none;
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
span.top-bar {
  margin-top: -10px;
  transform: rotate(0deg);
  border-radius: 32px;
}
.increase-index {
  z-index: 102;
}
span.middle-bar {
  opacity: 1;
  filter: alpha(opacity=100);
  width: 100%;
  border-radius: 32px;
}
span.bottom-bar {
  margin-top: 10px;
  transform: rotate(0deg);
  border-radius: 32px;
}
.top-icon-animate {
  margin-top: 0px !important;
  transform: rotate(135deg) !important;
}
.middle-icon-animate {
  opacity: 0 !important;
  filter: alpha(opacity=0) !important;
}
.bottom-icon-animate {
  margin-top: 0px !important;
  transform: rotate(-135deg) !important;
  width: 100% !;
}
.sign-in-icon {
  display: none;
}
@media (min-width: 992px) {
  .navis {
  }
}
@media (max-width: 992px) {
  .right-nav-links {
    right: 10px;
  }
  .mid-nav-links {
    left: 100px;
  }
}
@media (min-width: 769px) {
  aside.mobile-nav {
    display: none;
  }
  .right-nav-links {
    margin-left: 0px !important;
  }
}
@media (max-width: 768px) {
  nav {
    align-items: center;
  }
  .mid-nav-links {
    display: none;
  }
  .right-nav-links {
    align-items: center;
  }
  button.navbar-toggle {
    display: block;
    margin-right: 10px;
  }
  .toggler-icon {
    display: block;
  }
  .sign-in {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
