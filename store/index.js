export const state = () => ({
  signInOpen: false,
  selectPageIsOpen: false,
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
  ],
  selectedPizza: {},
  drinks: [
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 'N300',
      image: 'coke.png'
    },
    {
      name: 'FANTA',
      description: '33cl Original Taste',
      price: 'N300',
      image: '../assets/images/coke.png'
    },
    {
      name: 'SPRITE',
      description: '33cl Original Taste',
      price: 'N300',
      image: '../assets/images/coke.png'
    },
    {
      name: '5ALIVE BERRY BLAST',
      description: '85cl Original Taste',
      price: 'N800',
      image: '../assets/images/coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 'N300',
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 'N300',
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 'N300',
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 'N300',
      image: 'coke.png'
    }
  ]
})

export const getters = {}

export const actions = {}

export const mutations = {
  toggleSignIn (state) {
    state.signInOpen = !state.signInOpen
  },
  toggleSelect (state, pizza) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = pizza
  },
  toggleSelectFromSelect (state) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = {}
  }
}
