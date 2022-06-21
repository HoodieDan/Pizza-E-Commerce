<template>
  <div class="home-page">
    <SignInVue v-show="!signInOpen" />
    <SliderVue />
    <LocationsVue />
    <PizzasVue />
    <Drinks />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LocationsVue from '../components/Locations.vue'
import SignInVue from '~/components/SignIn.vue'
import SliderVue from '~/components/Slider.vue'
import PizzasVue from '~/components/Pizzas.vue'
import Drinks from '~/components/Drinks.vue'

export default {
  name: 'IndexPage',
  components: { SignInVue, SliderVue, LocationsVue, PizzasVue, Drinks },
  data () {
    return {
      ...mapState(['signInOpen'])
    }
  }
}
</script>

<style>
section {
  margin-top: 5%;
  margin-bottom: 5%;
}
h5 {
  font-size: 20px;
  position: relative;
}
h3.index-header {
  font-family: 'Hellix-Semibold';
  margin-left: 20px;
}
div.card {
  margin: 20px auto 20px auto;
  width: 250px;
  height: 280px;
  text-align: center;
  padding: 2%;
  transition: all 0.25s ease-out;
}
div.pizza-image {
  position: relative;
}
div.content {
  position: relative;
}
.pizzas, .drinks {
  background: url('../assets/images/background.png');
  height: 360px !important;
  position: relative;
  text-align: left !important;
}
.pizzas img {
  margin-top: -13px;
  position: relative;
}
.pizza-p, .drinks-p {
  font-size: 0.75rem;
  position: relative;
}
.from {
  font-size: 0.5rem;
  transform: rotate(270deg);
}
.btn {
  background-color: #58EE9E !important;
  color: #FFF;
  border-radius: 6px;
}
.button-text {
  padding: 20px !important;
}
div.button {
  text-align: center;
  margin: 2% auto 2% auto;
}
</style>
