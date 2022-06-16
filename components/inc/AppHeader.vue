<template>
  <nav>
    <div class="branding">
      <nuxt-link class="navbar-brand text-white" to="/">
        HOME
      </nuxt-link>
    </div>
    <div class="mid-nav-links">
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
    <div class="right-nav-links">
      <button class="btn">
        <i class="font-awesome fa-solid fa-cart-shopping" />
      </button>
      <button class="btn" @click.prevent="toggleSignIn">
        <span class="button-text">Sign In</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['toggleSignIn'])
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
  justify-content: space-between;
  position: relative;
  height: 94px;
  width: 100%;
  padding: 2% 4%;
}
div.mid-nav-links {
  position: relative;
  left: 100px;
}.mid-nav-links {
  display: flex;
  align-items: center;
}
.right-nav-links {
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
.btn {
  background-color: #58EE9E;
  color: #FFF;
  border-radius: 6px;
}
.btn-outline {
  background-color: #5D3801;
  border: 1px solid #FFF;
  border-radius: 6px;
  color: #FFF;
}
.button-text {
  padding: 20px;
}
.font-awesome {
  padding: 10px;
}
div button {
  margin-left: 10px;
}
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  width: 70vw;
  height: 90%;
  right: 0;
  top: 80px;
  background-color: #5D3801;
  color: #FFF;
  text-align: center;
  transform: translateX(1000px);
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
@media (max-width: 880px) {
  .right-nav-links {
    right: 10px;
  }
}
</style>
