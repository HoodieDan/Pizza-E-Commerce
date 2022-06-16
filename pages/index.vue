<template>
  <div class="home-page">
    <SignInVue />
    <!-- Home carousel AD -->
    <div class="carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/images/home-ad.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/images/home-ad.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/images/home-ad.png" alt="Third slide">
          </div>
        </div>
      </div>
    </div>
    <section class="locations">
      <h3 class="brown index-header">
        Select Location
      </h3>
      <div class="grid-container">
        <div class="card">
          <h3>Brand Name</h3>
          <h4>Surulere</h4>
          <h4>Branch</h4>
        </div>
        <div class="card">
          <h3>Brand Name</h3>
          <h4>Surulere</h4>
          <h4>Branch</h4>
        </div>
        <div class="card">
          <h3>Brand Name</h3>
          <h4>Surulere</h4>
          <h4>Branch</h4>
        </div>
        <div class="">
          <img src="../assets/images/create-your-pizza.png" alt="create your pizza">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SignInVue from '~/components/SignIn.vue'

export default {
  name: 'IndexPage',
  components: { SignInVue },
  data () {
    return {
      ...mapState(['signInOpen'])
    }
  }
}
</script>

<style>
div.carousel {
  margin-bottom: 50px;
}
h3.index-header {
  margin-left: 20px;
}
div.card {
  margin-left: 20px;
  width: 280px;
  height: 300px;
}
div.grid-container {
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 3fr;
}
</style>
