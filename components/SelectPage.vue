<template>
  <div
    class="backdrop"
    @wheel.self.prevent
    @touchmove.self.prevent
    @scroll.self.prevent
    @touch.self="toggleSelectFromSelect"
    @click.self="toggleSelectFromSelect"
  >
    <div class="select-modal">
      <div class="selected">
        <img src="../assets/images/select-page-pizza.png" alt="selected pizza">
      </div>
      <div class="pizza-info">
        <button class="close-modal btn" @click="toggleSelectFromSelect(); activeId = []">
          <i class="fa-solid fa-xmark" />
        </button>
        <div class="cont">
          <div class="info">
            <h2 class="brown semi-bold">
              {{ selectedPizza.name }}
            </h2>
            <h6 class="brown">
              {{ selectedPizza.ingredients }}
            </h6>
          </div>
          <!-- select size -->
          <div class="size">
            <h5 class="brown semi-bold">
              Select Size
            </h5>
            <div class="row">
              <button class="select brown" :class="getActiveSize('regular')" @click="selectSize('regular'), sizeId = 'regular'">
                <span class="button-text">Regular</span>
              </button>
              <button class="select brown" :class="getActiveSize('thin')" @click="selectSize('thin'), sizeId = 'thin'">
                <span class="button-text">Thin</span>
              </button>
              <button class="select brown" :class="getActiveSize('large')" @click="selectSize('large'), sizeId = 'large'">
                <span class="button-text">Large</span>
              </button>
            </div>
          </div>

          <!-- Meat Toppings  -->
          <div class="select-toppings mt-4">
            <h5 class="brown semi-bold">
              Select Meat Toppings
            </h5>
            <div class="toppings row" role="group">
              <div v-for="(topping, index) in toppings.meat" :key="index" class="col-6">
                <button class="topping" :class="getActiveClass(topping)" @click="addMeatTopping(topping), makeActive(topping)">
                  <p class="brown topping-name">
                    {{ topping.name }}
                  </p>
                  <p class="brown topping-price">
                    N{{ topping.price }}
                  </p>
                </button>
                <div v-show="toppingSelected(topping)" class="side">
                  <!-- left side -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'left')}" @click="leftTopping(topping)">
                    <i class="fa-solid fa-circle-half-stroke" />
                  </button>
                  <!-- center -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'full')}" @click="centerTopping(topping)">
                    <i class="fa-solid fa-circle" />
                  </button>
                  <!-- right side -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'right')}" @click="rightTopping(topping)">
                    <i class="fa-solid fa-circle-half-stroke left-topping" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Vegetable Toppings  -->
          <div class="select-toppings mt-4">
            <h5 class="brown semi-bold">
              Select Vegetable Toppings
            </h5>
            <div class="toppings row" role="group">
              <div v-for="(topping, index) in toppings.vegetables" :key="index" class="col-6">
                <button class="topping" :class="getActiveClass(topping)" @click="addVegetableTopping(topping), makeActive(topping)">
                  <p class="brown topping-name">
                    {{ topping.name }}
                  </p>
                  <p class="brown topping-price">
                    N{{ topping.price }}
                  </p>
                </button>
                <div v-show="toppingSelected(topping)" class="side">
                  <!-- left side  -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'left')}" @click="leftTopping(topping)">
                    <i class="fa-solid fa-circle-half-stroke" />
                  </button>
                  <!-- center  -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'center')}" @click="centerTopping(topping)">
                    <i class="fa-solid fa-circle" />
                  </button>
                  <!-- right side -->
                  <button class="topping-side brown" :class="{'active': getActiveSide(topping, 'right')}" @click="rightTopping(topping)">
                    <i class="fa-solid fa-circle-half-stroke left-topping" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- complete total  -->
          <div class="total">
            <h6 class="brown">
              Total:
            </h6>
            <h2 v-if="selectedItemTotal" class="brown semi-bold">
              N{{ selectedItemTotal }}
            </h2>
          </div>
        </div>
        <!-- cart button -->
        <button class="btn add-to-cart" @click="addToCart(); activeId = []">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'SelectPage',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    selected: Object
  },
  emits: ['togglePage'],
  data () {
    return {
      activeId: [],
      sizeId: 'regular'
    }
  },
  computed: {
    ...mapState(['selectPageIsOpen', 'selectedPizza', 'toppings']),
    ...mapGetters(['selectedItemTotal'])
  },
  methods: {
    ...mapMutations(['toggleSelectFromSelect', 'addToCart', 'selectSize', 'addMeatTopping', 'addVegetableTopping', 'centerTopping', 'leftTopping', 'rightTopping', 'toppingIsSelected']),
    getActiveClass (id) {
      const foundItem = this.activeId.find((item) => {
        return item === id
      })
      if (foundItem) {
        return 'active'
      } else {
        return 'not-active'
      }
    },
    getActiveSize (id) {
      if (id === this.sizeId) {
        return 'active'
      } else {
        return ''
      }
    },
    getActiveSide (id, side) {
      if (id.position === side) {
        return 'active'
      } else {
        return ''
      }
    },
    makeActive (id) {
      const foundItem = this.activeId.find((item) => {
        return item === id
      })
      if (foundItem) {
        const index = this.activeId.indexOf(id)
        this.activeId.splice(index, 1)
      } else if (this.activeId.length !== 3 && !foundItem) {
        this.activeId.push(id)
      }
    },
    toppingSelected (topping) {
      if (this.activeId.includes(topping)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
button.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
}
h2 {
    margin-top: 30px;
}
div.select-modal {
    width: 800px;
    height: 500px;
    background: #FFF;
    margin: auto auto;
    display: flex;
    position: relative;
    overflow-y: initial !important;
    overflow-x: hidden;
}
div.backdrop {
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
}
div.cont {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.selected img {
    height: 100%;
    position: relative;
    overflow-y: hidden;
}
.pizza-info {
    padding: 20px;
    overflow-y: auto;
}
button.select {
    border: #DED8D8 1px solid;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
button.topping {
  border: #DED8D8 1px solid;
  border-radius: 5px;
  width: 115px;
  margin: 5px;
}
.topping-side {
  border: #DED8D8 1px solid;
  border-radius: 5px;
  margin: 5px;
}
.left-topping {
  transform: rotateY(180deg);
}
img.topping-image {
  max-height: 21px;
  max-width: 37px;
}
p.topping-price {
  margin-bottom: 0 !important;
  font-size: 10px;
}
p.topping-name {
  margin: 0;
}
div.total {
  margin-top: 20px;
}
.add-to-cart {
  position: relative;
  left: 60%;
}
button:focus,
button:hover,
button:active,
button:visited {
  outline: #58EE9E solid 1px;
}
.active {
  outline: #58EE9E solid 1px;
}
.not-active {
  outline: none;
}
@media (max-width: 768px) {
  button.close-modal {
    z-index: 100;
  }
  div.select-modal {
    width: auto !important;
    margin: auto 10px !important;
  }
  .selected img {
    display: none;
  }
}
@media (max-width: 400px) {
  button.select {
    padding: 0px;
    margin-right: 0;
  }
}
</style>
