<template>
  <div class="home-page">
    <SignInVue v-show="!signInOpen" />
    <SliderVue />
    <LocationsVue />
    <section id="pizzas" class="container-fluid">
      <h3 class="brown index-header">
        Pizzas
      </h3>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LocationsVue from '../components/Locations.vue'
import SignInVue from '~/components/SignIn.vue'
import SliderVue from '~/components/Slider.vue'

export default {
  name: 'IndexPage',
  components: { SignInVue, SliderVue, LocationsVue },
  data () {
    return {
      ...mapState(['signInOpen'])
    }
  }
}
</script>

<style>
#locations {
  margin-top: 5%;
  margin-bottom: 5%;
}
h3.index-header {
  margin-left: 20px;
  padding-bottom: 30px;
}
div.card {
  margin-left: 20px;
  width: 250px;
  height: 280px;
  text-align: center;
  padding: 2%;
}
</style>
