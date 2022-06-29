<template>
  <div class="home-page">
    <SliderVue />
    <PizzasVue />
    <Drinks />
    <Sides />
    <Desserts />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Desserts from '../components/Desserts.vue'
import SliderVue from '~/components/Slider.vue'
import PizzasVue from '~/components/Pizzas.vue'
import Drinks from '~/components/Drinks.vue'
import Sides from '~/components/Sides.vue'

export default {
  name: 'IndexPage',
  components: { SliderVue, PizzasVue, Drinks, Sides, Desserts },
  props: {
    signInIsOpen: Boolean
  },
  data () {
    return {
      ...mapState(['signInOpen'])
    }
  }
}
</script>

<style>
section {
  margin-top: 4rem;
  margin-bottom: 4rem;
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
  width: 220px;
  height: 280px;
  text-align: center;
  padding: 2%;
  transition: all 0.15s linear;
}
div.pizza-image {
  position: relative;
  height: 200px;
}
div.content {
  position: relative;
}
.pizzas, .drinks, .sides, .desserts {
  background: url('../assets/images/background.png');
  height: 360px !important;
  position: relative;
  text-align: left !important;
}
.pizzas img {
  bottom: 10px;
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
@media (width:768px) {
  div.home-page {
    overflow-x: hidden;
  }
  div.card {
    width: 230px !important;
  }
}
</style>
