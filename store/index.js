export const state = () => ({
  signInOpen: false,
  selectPageIsOpen: false,
  cartIsOpen: false,
  pizzas: [
    {
      name: 'MARGHERITA',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3400,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'LIGHT CHEESE',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3000,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'SUYA PIZZA',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3200,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'PEPPERONI',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3200,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'HAWAIIAN',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3400,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'SUPER MEATY',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3000,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'MEATY BBQ',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3200,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    },
    {
      name: 'CHEESY CHICKEN',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      price: 3200,
      image: '',
      size: '',
      quantity: 1,
      toppings: []
    }
  ],
  selectedPizza: {},
  drinks: [
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 300,
      image: 'coke.png'
    },
    {
      name: 'FANTA',
      description: '33cl Original Taste',
      price: 300,
      image: '../assets/images/coke.png'
    },
    {
      name: 'SPRITE',
      description: '33cl Original Taste',
      price: 300,
      image: '../assets/images/coke.png'
    },
    {
      name: '5ALIVE BERRY BLAST',
      description: '85cl Original Taste',
      price: 800,
      image: '../assets/images/coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 300,
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 300,
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 300,
      image: 'coke.png'
    },
    {
      name: 'COCA-COLA',
      description: '33cl Orginal Taste',
      price: 300,
      image: 'coke.png'
    }
  ],
  cartItems: []
})

export const getters = {
  cartItemsLength (state) {
    return state.cartItems.length
  },
  itemTotal (state) {
    let prices = 0
    let toppingsPrice = 0
    state.cartItems.forEach((item) => {
      prices += (item.price * item.quantity)
      toppingsPrice += (item.toppings.length * 600)
    })
    const sum = prices + toppingsPrice
    return sum
  }
}

export const actions = {}

export const mutations = {
  toggleSignIn (state) {
    state.signInOpen = !state.signInOpen
  },
  toggleSelect (state, pizza) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = pizza
  },
  toggleCart (state) {
    state.cartIsOpen = !state.cartIsOpen
  },
  toggleSelectFromSelect (state) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = {}
  },
  addToCart (state) {
    if (state.cartItems.includes(state.selectedPizza)) {
      state.selectedPizza.quantity++
    } else {
      state.cartItems.push(state.selectedPizza)
    }
    state.cartIsOpen = true
  },
  removeFromCart (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return item.name === order
    })
    foundItem.quantity = 1
    const index = state.cartItems.indexOf(foundItem)
    state.cartItems.splice(index, 1)
  },
  increaseQuantity (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return item.name === order
    })
    foundItem.quantity++
  },
  reduceQuantity (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return item.name === order
    })
    foundItem.quantity--
    if (foundItem.quantity === 0) {
      const index = state.cartItems.indexOf(foundItem)
      state.cartItems.splice(index, 1)
    }
  }
}
