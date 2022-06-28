export const state = () => ({
  signInOpen: false,
  selectPageIsOpen: false,
  cartIsOpen: false,
  pizzas: [
    {
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'pizza',
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
      category: 'drink',
      name: 'COCA-COLA',
      quantity: 1,
      description: '33cl Orginal Taste',
      price: 300,
      image: require('../assets/images/coke.png')
    },
    {
      category: 'drink',
      name: 'FANTA',
      quantity: 1,
      description: '33cl Original Taste',
      price: 300,
      image: require('../assets/images/fanta.png')
    },
    {
      category: 'drink',
      name: 'SPRITE',
      quantity: 1,
      description: '33cl Original Taste',
      price: 300,
      image: require('../assets/images/sprite.png')
    },
    {
      category: 'drink',
      name: '7-UP',
      quantity: 1,
      description: '33cl Original Taste',
      price: 250,
      image: require('../assets/images/7up.png')
    },
    {
      category: 'drink',
      name: 'NESTLE WATER',
      quantity: 1,
      description: '33cl Orginal Taste',
      price: 250,
      image: require('../assets/images/nestle-water.png')
    },
    {
      category: 'drink',
      name: 'HEINEKEN',
      quantity: 1,
      description: '33cl Orginal Taste',
      price: 300,
      image: require('../assets/images/heineken.png')
    },
    {
      category: 'drink',
      name: 'PEPSI',
      quantity: 1,
      description: '33cl Orginal Taste',
      price: 300,
      image: require('../assets/images/pepsi.png')
    },
    {
      category: 'drink',
      name: 'MONSTER ENERGY',
      quantity: 1,
      description: '33cl Orginal Taste',
      price: 300,
      image: require('../assets/images/monster-energy.png')
    }
  ],
  selectedDrink: {},
  sides: [
    {
      category: 'sides',
      name: 'POTATO WEDGES',
      quantity: 1,
      description: 'Hot potatoes baked in oven',
      price: 1400,
      image: require('../assets/images/potato-wedges.png')
    },
    {
      category: 'sides',
      name: 'BBQ WINGS',
      quantity: 1,
      description: 'Baked chicken wings marinated in BBQ sauce 5 pieces',
      price: 2200,
      image: require('../assets/images/bbq-wings.png')
    },
    {
      category: 'sides',
      name: 'SPRING ROLLS',
      quantity: 1,
      description: 'Specialty. Small rolls of Dodo dough with mozzarella and cheese sauce 8 pieces',
      price: 1400,
      image: require('../assets/images/spring-roll.png')
    },
    {
      category: 'sides',
      name: 'CHICKEN STRIPS',
      quantity: 1,
      description: 'Baked Chicken Strips 4 pieces',
      price: 1600,
      image: require('../assets/images/chicken-strips.png')
    },
    {
      category: 'sides',
      name: 'CHICKEN SHAWARMA',
      quantity: 1,
      description: 'Hot baked wrap with chicken, tomatoes, mozzarella and BBQ sauce',
      price: 1500,
      image: require('../assets/images/chicken-shawarma.png')
    },
    {
      category: 'sides',
      name: 'CHEESE GARLIC FOCACCIA',
      quantity: 1,
      description: 'Medium (23cm) pizza base with garlic spread and mozzarella',
      price: 1500,
      image: require('../assets/images/cheese-garlic-focaccia.png')
    },
    {
      category: 'sides',
      name: 'COCKTAIL CHEESE GRILLERS',
      quantity: 1,
      description: '10 Per portion',
      price: 1500,
      image: require('../assets/images/cocktail-cheese-grillers.png')
    },
    {
      category: 'sides',
      name: 'CRUSHED CHILLI',
      quantity: 1,
      description: 'Crushed chilli in a tub',
      price: 1500,
      image: require('../assets/images/crushed-chilli.png')
    }
  ],
  desserts: [
    {
      category: 'desserts',
      name: 'FROZEN CHOCOLATE ROLLS',
      quantity: 1,
      description: 'Small Rolls of frozen chocolate 8 pieces',
      price: 1300,
      image: require('../assets/images/chocolate-rolls.png')
    },
    {
      category: 'desserts',
      name: 'CINNAMON ROLLS',
      quantity: 1,
      description: 'Small Rolls of dough with cinnamon and sugar 8 pieces',
      price: 1300,
      image: require('../assets/images/cinnamon-rolls.png')
    },
    {
      category: 'desserts',
      name: 'DEATH BY CHOCOLATE',
      quantity: 1,
      description: 'Warm Chocolate Pudding. Serves 4',
      price: 1800,
      image: require('../assets/images/death-by-chocolate.png')
    },
    {
      category: 'desserts',
      name: 'CHOCOLATE CAKE',
      quantity: 1,
      description: 'Slice of cgocolate cake with a cherry topping',
      price: 1000,
      image: require('../assets/images/chocolate-cake-slice.png')
    },
    {
      category: 'desserts',
      name: 'CHOCOLATE ICE CREAM',
      quantity: 1,
      description: 'Small cup of chocolate ice-cream',
      price: 1500,
      image: require('../assets/images/chocolate-ice-cream.png')
    },
    {
      category: 'desserts',
      name: 'CHOCOLATE CHIP COOKIES',
      quantity: 1,
      description: 'Bite sized chocolate chip cookies 10 pieces',
      price: 1000,
      image: require('../assets/images/chocolate-chip-cookies.png')
    },
    {
      category: 'desserts',
      name: 'STRAWBERRY PIE',
      quantity: 1,
      description: 'A slice of our special strawberry pie',
      price: 1300,
      image: require('../assets/images/strawberry-pie.png')
    },
    {
      category: 'desserts',
      name: 'CHOCOLATE CUPCAKE',
      quantity: 1,
      description: 'Chocolate flavoured cupcakes 4 pieces',
      price: 1600,
      image: require('../assets/images/chocolate-cupcake.png')
    }
  ],
  cartItems: {
    pizza: [],
    drink: [],
    sides: [],
    desserts: []
  }
})

export const getters = {
  pizzaItemsLength (state) {
    return state.cartItems.pizza.length
  },
  drinksItemsLength (state) {
    return state.cartItems.drink.length
  },
  sidesItemsLength (state) {
    return state.cartItems.sides.length
  },
  dessertItemsLength (state) {
    return state.cartItems.desserts.length
  },
  itemTotal (state) {
    let prices = 0
    let toppingsPrice = 0
    let drinksPrice = 0
    let sidesPrice = 0
    let dessertsPrice = 0
    state.cartItems.pizza.forEach((item) => {
      prices += (item[item.size].price * item.quantity)
      item.toppings.forEach((topping) => {
        toppingsPrice += (topping.price * item.quantity)
      })
    })
    state.cartItems.drink.forEach((item) => {
      drinksPrice += (item.price * item.quantity)
    })
    state.cartItems.sides.forEach((item) => {
      sidesPrice += (item.price * item.quantity)
    })
    state.cartItems.desserts.forEach((item) => {
      dessertsPrice += (item.price * item.quantity)
    })
    const sum = prices + toppingsPrice + drinksPrice + sidesPrice + dessertsPrice
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
    state.selectedPizza.total = sum
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
    state.selectedPizza = { ...pizza }
  },
  selectDrink (state, drink) {
    state.selectedDrink = { ...drink }
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
    if (state.drinks.length !== 0) {
      const inCart = state.cartItems[cartItem.category].find((item) => {
        return ((JSON.stringify(item.toppings.sort()) === JSON.stringify(state.selectedPizza.toppings.sort())) &&
         ((item.size) === (state.selectedPizza.size)) &&
         ((item.name) === (state.selectedPizza.name)))
      })
      if (inCart) {
        inCart.quantity++
      } else {
        state.cartItems[state.selectedPizza.category].push(cartItem)
        cartItem = {}
      }
    }
    state.selectedPizza.toppings = []
    state.cartIsOpen = true
  },
  addOthersToCart (state, order) {
    if (state.drinks.length !== 0) {
      const inCart = state.cartItems[order.category].find((item) => {
        return ((item.name) === (order.name))
      })
      if (inCart) {
        inCart.quantity++
      } else {
        state.cartItems[order.category].push(order)
      }
    }
    state.cartIsOpen = true
  },
  removeFromCart (state, order) {
    const foundItem = state.cartItems[order.category].find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity = 1
    foundItem.toppings = []
    const index = state.cartItems[order.category].indexOf(foundItem)
    state.cartItems[order.category].splice(index, 1)
  },
  increaseQuantity (state, order) {
    const foundItem = state.cartItems[order.category].find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity++
  },
  reduceQuantity (state, order) {
    const foundItem = state.cartItems[order.category].find((item) => {
      return (JSON.stringify(item) === JSON.stringify(order))
    })
    foundItem.quantity--
    if (foundItem.quantity === 0) {
      const index = state.cartItems[order.category].indexOf(foundItem)
      state.cartItems[order.category].splice(index, 1)
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
      const index = state.selectedPizza.toppings.indexOf(top)
      state.selectedPizza.toppings.splice(index, 1)
    } else if (state.selectedPizza.toppings.length < 3) {
      state.selectedPizza.toppings.push(top)
    }
  }
}
