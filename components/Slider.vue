<template>
  <div class="home-grid container">
    <div class="slider-wrapper">
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="4000"
        fade
        indicators
        background="#FFF"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slide One -->
        <b-carousel-slide class="carousel-slide">
          <template #img>
            <img
              class="image-slot"
              width="100%"
              height="100%"
              src="../assets/images/pexels-4.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide two -->
        <b-carousel-slide class="carousel-slide">
          <template #img>
            <img
              class="image-slot"
              width="100%"
              height="100%"
              src="../assets/images/pexels-2.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide three -->
        <b-carousel-slide class="carousel-slide">
          <template #img>
            <img
              class="image-slot"
              width="100%"
              height="100%"
              src="../assets/images/pexels-3.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- <div class="banner">
      <img src="../assets/images/banner-1.jpg" alt="banner">
    </div> -->
    <aside>
      <img class="square-pic box" src="../assets/images/pizza-banner-2.png" alt="banner">
      <img class="square-pic square mt-2" src="../assets/images/pizza-banner-3.png" alt="banner">
    </aside>
    <!-- <div class="foot">
      <img src="../assets/images/home-ad.png" alt="banner">
    </div> -->
    <div class="mobile">
      <img src="../assets/images/food-banner-1.jpg" alt="banner" class="banner">
      <img src="../assets/images/home-ad.png" alt="banner" class="banner">
      <img src="../assets/images/banner-3.jpg" alt="banner" class="banner">
      <!-- <img src="../assets/images/banner-1.jpg" alt="banner" class="banner"> -->
      <!-- <img src="../assets/images/banner-2.jpg" alt="banner" class="banner"> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Slider',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
div.home-grid {
  height: auto;
  display: grid;
  grid-template-areas: 'main main box'
  'main main square';
  gap: 10px;
  margin-top: 100px;
}
div.slider-wrapper {
  grid-area: main;
  width: auto;
}
.image-slot {
  height: 509px;
}
/* div.banner img {
  height: 500px;
  width: 66vw;
  grid-area: main;
  display: none;
} */
aside {
  display: flex;
  flex-direction: column;
}
.foot {
  grid-area: footer;
  max-width: 100%;
}
.foot img {
  height: 200px;
  width: 100%;
}
.banner {
  display: none;
}
/* .box {
} */
.square-pic {
  width: 250px;
}
@media (max-width: 768px) {
  div.home-grid {
    display: flex;
    height: auto !important;
  }
  .carousel-slide {
    height: 60vh !important;
  }
  .slider-wrapper {
    display: none !important;
    width: auto;
  }
  .image-slot {
    width: auto;
  }
  div.banner, .foot, aside {
    display: none;
  }
  .banner {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
@media (max-width: 768px) {
}
</style>
