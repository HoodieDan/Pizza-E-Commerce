export const state = () => ({
  signInOpen: false,
  selectPageIsOpen: false,
  cartIsOpen: false,
  pizzas: [
    {
      name: 'MARGHERITA',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/margherita.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3400
      },
      thin: {
        price: 3000
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'CHICKEN CURRY',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/chicken-curry.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3000
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'VEGGIE OVERLOAD',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/veggie-overload.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3200
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'PEPPERONI',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/pepperoni.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3000
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'HAWAIIAN',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/hawaiian.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3000
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'SUPER MEATY',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/super-meaty.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3000
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'MEATY BBQ',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/meaty-bbq.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3200
      },
      thin: {
        price: 2600
      },
      large: {
        price: 4000
      }
    },
    {
      name: 'CHEESY CHICKEN',
      ingredients: 'Cheddar, Marinara Sauce, Mozzarella Cheese, BBQ Sauce, Olives, Red Onions, Green Pepper Sweet Corn, Red Chilli',
      image: require('../assets/images/cheesy-chicken.png'),
      quantity: 1,
      toppings: [],
      size: 'regular',
      regular: {
        price: 3000
      },
      thin: {
        price: 2800
      },
      large: {
        price: 4200
      }
    }
  ],
  selectedTopping: {},
  toppings: [
    {
      name: 'onions',
      price: 200,
      image: require('../assets/images/onions.png')
    },
    {
      name: 'chicken',
      price: 600,
      image: require('../assets/images/chicken.png')
    },
    {
      name: 'sausage',
      price: 400,
      image: require('../assets/images/sausage.png')
    },
    {
      name: 'mozzarella',
      price: 300,
      image: require('../assets/images/mozzarella.png')
    },
    {
      name: 'chilli',
      price: 250,
      image: require('../assets/images/chilli-peppers.png')
    },
    {
      name: 'mushrooms',
      price: 200,
      image: require('../assets/images/mushrooms.png')
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
      prices += (item[item.size].price * item.quantity)
      item.toppings.forEach((topping) => {
        toppingsPrice += (topping.price * item.quantity)
      })
    })
    const sum = prices + toppingsPrice
    return sum
  },
  selectedItemTotal (state) {
    let pizzaPrice = 0
    if (state.selectedPizza[state.selectedPizza.size]) {
      pizzaPrice += state.selectedPizza[state.selectedPizza.size].price
    }
    let toppingTotal = 0
    if (state.selectedPizza.toppings) {
      state.selectedPizza.toppings.forEach((item) => {
        toppingTotal += item.price
      })
    }
    const sum = pizzaPrice + toppingTotal
    return sum
  },
  cartItemTotal (getters) {
    return getters.selectedItemTotal
  }
}

export const actions = {}

export const mutations = {
  toggleSignIn (state) {
    state.signInOpen = !state.signInOpen
  },
  toggleSelect (state, pizza) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = { ...pizza }
  },
  toggleCart (state) {
    state.cartIsOpen = !state.cartIsOpen
  },
  toggleSelectFromSelect (state) {
    state.selectPageIsOpen = !state.selectPageIsOpen
    state.selectedPizza = {}
  },
  addToCart (state) {
    let cartItem = { ...state.selectedPizza }
    const inCart = state.cartItems.find((item) => {
      return ((JSON.stringify(item.toppings.sort()) === JSON.stringify(state.selectedPizza.toppings.sort())) &&
       ((item.size) === (state.selectedPizza.size)) &&
       ((item.name) === (state.selectedPizza.name)))
    })
    if (inCart) {
      inCart.quantity++
    } else {
      state.cartItems.push(cartItem)
      cartItem = {}
    }
    state.selectedPizza.toppings = []
    state.cartIsOpen = true
  },
  removeFromCart (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity = 1
    foundItem.toppings = []
    const index = state.cartItems.indexOf(foundItem)
    state.cartItems.splice(index, 1)
  },
  increaseQuantity (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity++
  },
  reduceQuantity (state, order) {
    const foundItem = state.cartItems.find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity--
    if (foundItem.quantity === 0) {
      const index = state.cartItems.indexOf(foundItem)
      state.cartItems.splice(index, 1)
      foundItem.quantity = 1
    }
  },
  selectSize (state, size) {
    state.selectedPizza.size = size
  },
  addTopping (state, topping) {
    const top = state.toppings.find((item) => {
      return item.name === topping.name
    })
    if (state.selectedPizza.toppings.includes(top)) {
      state.selectedPizza.toppings.pop()
    } else {
      state.selectedPizza.toppings.push(top)
    }
  }
}
