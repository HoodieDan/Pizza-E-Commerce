<template>
  <div>
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
      <b-carousel-slide img-src="../assets/images/home-ad.png" />

      <!-- Slides two -->
      <b-carousel-slide>
        <template #img>
          <img
            width="100%"
            src="../assets/images/home-ad.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/images/home-ad.png" />
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

<style>

</style>
