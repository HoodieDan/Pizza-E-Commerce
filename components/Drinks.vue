<template>
  <section id="drinks" class="container">
    <h3 class="index-header brown">
      Drinks
    </h3>
    <div class="row">
      <div v-for="(drink, index) in drinks" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <button class="drinks-button" @click="selectDrink(drink); toggleSelectOthers(drink)">
          <div class="card drinks brown">
            <div class="drink-image">
              <img class="drink" :class="drink.name" :src="drink.image" :alt="'drink img'">
            </div>
            <div class="content">
              <div>
                <h5>{{ drink.name }}</h5>
                <p class="drinks-p">
                  {{ drink.description }}
                </p>
              </div>
              <div>
                <h5><span class="from">from</span>N{{ drink.price }}</h5>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
    <SelectOthers v-show="selectOthersisOpen" />
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
  name: 'Drinks',
  components: { SelectOthers },
  computed: {
    ...mapState(['drinks', 'selectOthersisOpen'])
  },
  methods: {
    ...mapMutations(['selectDrink', 'toggleSelectOthers'])
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
img.drink {
  max-height: 205px;
  max-width: 205px;
}
img.FANTA {
  margin-top: 20px;
}
.drinks-button {
  padding: 0 !important;
}
div.card:focus,
div.card:hover {
    outline: solid 3px #58EE9E;
}
div.drink-image {
    display: flex;
    justify-content: center;
}
div.content:nth-child(2) {
    position: absolute;
    bottom: 5px;
    left: 7px
}
@media (max-width: 575px) {
  div.card {
    width: 90vw;
    height: auto !important;
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;
  }
  div.drink-image {
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
