<template>
  <section id="desserts" class="container">
    <h3 class="index-header brown">
      Desserts
    </h3>
    <div class="row">
      <div v-for="(dessert, index) in desserts" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <button class="desserts-button" @click="toggleSelectOthers(dessert)">
          <div class="card desserts brown">
            <div class="dessert-image">
              <img class="dessert" :class="dessert.name" :src="dessert.image" :alt="'dessert img'">
            </div>
            <div class="content">
              <div>
                <h5>{{ dessert.name }}</h5>
                <p class="desserts-p">
                  {{ dessert.description }}
                </p>
              </div>
              <div>
                <h5><span class="from">from</span>N{{ dessert.price }}</h5>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
    <SelectOthers v-show="selectOthersIsOpen" />
    <div class="button">
      <button class="btn">
        <span class="button-text">View More</span>
      </button>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SelectOthers from './SelectOthers.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sides',
  components: { SelectOthers },
  computed: {
    ...mapState(['desserts', 'selectOthersIsOpen'])
  },
  methods: {
    ...mapMutations(['selectDrink', 'addOthersToCart', 'toggleSelectOthers'])
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
img.dessert {
  max-height: 205px;
  max-width: 205px;
}
.desserts-button {
  padding: 0 !important;
}
.desserts-p {
    font-size: 12px;
}
div.card:focus,
div.card:hover {
    outline: solid 3px #58EE9E;
}
div.dessert-image {
    display: flex;
    justify-content: center;
}
div.content:nth-child(2) {
    position: absolute;
    bottom: 5px;
    left: 7px
}
@media (min-width: 575px) {
    div.dessert-image {
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
  div.dessert-image {
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
