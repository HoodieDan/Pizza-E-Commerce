<template>
  <section id="pizzas" class="container-fluid">
    <h3 class="brown index-header brown">
      Pizzas
    </h3>
    <div class="row">
      <div v-for="(pizza, index) in pizzas" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <button class="pizza-button" @click.prevent="toggleSelect(pizza)">
          <div class="card pizzas brown">
            <div class="pizza-image">
              <img src="../assets/images/pizza-pizza.png" alt="pizza img">
            </div>
            <div class="content">
              <h5>{{ pizza.name }}</h5>
              <p class="pizza-p">
                {{ pizza.ingredients }}
              </p>
              <h5><span class="from">from</span>{{ pizza.price }}</h5>
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
    <SelectPage v-show="openSelect === true" :selected="selected" @togglePage="toggleSelectFromSelect" />
  </section>
</template>

<script>
import SelectPage from '~/components/SelectPage.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pizzas',
  components: { SelectPage },
  data () {
    return {
      openSelect: false,
      selected: {},
      pizzas: [
        {
          name: 'MARGHERITA',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,400',
          image: ''
        },
        {
          name: 'LIGHT CHEESE',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,000',
          image: ''
        },
        {
          name: 'SUYA PIZZA',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,200',
          image: ''
        },
        {
          name: 'PEPPERONI',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,200',
          image: ''
        },
        {
          name: 'MARGHERITA',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,400',
          image: ''
        },
        {
          name: 'LIGHT CHEESE',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,000',
          image: ''
        },
        {
          name: 'SUYA PIZZA',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,200',
          image: ''
        },
        {
          name: 'PEPPERONI',
          ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
          price: 'N3,200',
          image: ''
        }
      ]
    }
  },
  methods: {
    toggleSelect (pizza) {
      this.openSelect = !this.openSelect
      this.selected = pizza
    },
    toggleSelectFromSelect (pizza) {
      this.openSelect = !this.openSelect
      this.selected = {}
    }
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
.pizza-button {
  padding: 0 !important;
}
div.card:focus,
div.card:hover {
  border: solid 3px #58EE9E;
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
