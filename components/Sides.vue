<template>
  <section id="sides" class="container">
    <h3 class="index-header brown">
      Sides
    </h3>
    <div class="row">
      <div v-for="(side, index) in sides" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <button class="sides-button" @click="addOthersToCart(side)">
          <div class="card sides brown">
            <div class="side-image">
              <img class="side" :class="side.name" :src="side.image" :alt="'side img'">
            </div>
            <div class="content">
              <div>
                <h5>{{ side.name }}</h5>
                <p class="sides-p">
                  {{ side.description }}
                </p>
              </div>
              <div>
                <h5><span class="from">from</span>N{{ side.price }}</h5>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
    <div class="button">
      <button class="btn">
        <span class="button-text">View More</span>
      </button>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sides',
  computed: {
    ...mapState(['sides'])
  },
  methods: {
    ...mapMutations(['selectDrink', 'addOthersToCart'])
  }
}
</script>

<style scoped>
button {
  border: none;
  background: none;
  padding: 0;
}
button:last-child {
    padding: 10px;
}
img.side {
  max-height: 205px;
  max-width: 205px;
}
.sides-button {
  padding: 0 !important;
}
.sides-p {
    font-size: 12px;
}
div.card:focus,
div.card:hover {
    outline: solid 3px #58EE9E;
}
div.side-image {
    display: flex;
    justify-content: center;
}
div.content:nth-child(2) {
    position: absolute;
    bottom: 5px;
    left: 7px
}
@media (min-width: 575px) {
    div.side-image {
        height: 200px;
        align-items: center;
    }
}
@media (max-width: 575px) {
  div.card {
    width: 90vw;
    height: auto !important;
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
  }
  div.side-image {
    right: 20px;
    transform: scale(0.7);
    flex: 0 0 50%;
    max-width: 50%;
  }
  div.content {
    flex: 0 0 50%;
    max-width: 50%;
  }
  div.content:nth-child(2) {
    position: relative;
    bottom: 5px;
    left: 7px
  }
}
</style>
