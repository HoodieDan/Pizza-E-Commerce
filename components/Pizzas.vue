<template>
  <section id="pizzas" class="container">
    <h3 class="brown index-header brown">
      Pizzas
    </h3>
    <div class="row">
      <div v-for="(pizza, index) in pizzas" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <button class="pizza-button" @click.prevent="toggleSelect(pizza)">
          <div class="card pizzas brown">
            <div class="pizza-image">
              <img :src="pizza.image" alt="pizza img">
            </div>
            <div class="content">
              <h5>{{ pizza.name }}</h5>
              <p class="pizza-p">
                {{ pizza.ingredients }}
              </p>
              <h5 v-if="pizza.regular">
                <span class="from">from</span>N{{ pizza.regular.price }}
              </h5>
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
    <SelectPage v-show="selectPageIsOpen === true" />
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SelectPage from '~/components/SelectPage.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pizzas',
  components: { SelectPage },
  data () {
    return {
      openSelect: false,
      selected: {}
    }
  },
  computed: {
    ...mapState(['selectPageIsOpen', 'pizzas'])
  },
  methods: {
    ...mapMutations(['toggleSelect'])
  }
}
</script>

<style scoped>
img {
  transform: scale(0.8);
  max-width: 100%;
}
button {
  border: none;
  background: none;
  padding: 0;
}
button:last-child {
  padding: 10px;
}
.pizza-button {
  padding: 0 !important;
}
div.card:focus,
div.card:hover {
  outline: solid 3px #58EE9E;
}
@media (max-width: 575px) {
  div.card {
    width: 92vw;
    height: auto !important;
    display: flex;
    flex-direction: row;
    padding: 0;
    position: relative;
    align-items: center;
  }
  div.pizza-image {
    right: 20px;
    transform: scale(0.7);
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
  }
  div.content {
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
  }
}
</style>
