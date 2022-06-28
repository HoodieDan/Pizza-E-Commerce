<template>
  <div class="slider-wrapper" style="height: 100vh;">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#FFF"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slide One -->
      <b-carousel-slide class="carousel-slide" style="height: 100vh;">
        <template #img>
          <img
            width="100%"
            height="100%"
            src="../assets/images/pexels-4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides two -->
      <b-carousel-slide class="carousel-slide" style="height: 100vh;">
        <template #img>
          <img
            width="100%"
            height="100%"
            src="../assets/images/pexels-2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides three -->
      <b-carousel-slide class="carousel-slide" style="height: 100vh;">
        <template #img>
          <img
            width="100%"
            height="100%"
            src="../assets/images/pexels-3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
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
@media (max-width: 992px) {
  .slider-wrapper {
    height: 60vh !important;
  }
  .carousel-slide {
    height: 60vh !important;
  }
}
</style>
