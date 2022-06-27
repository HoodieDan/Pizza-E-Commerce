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
        <button class="close-modal btn" @click="toggleSelectFromSelect">
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
          <div class="select-toppings">
            <h5 class="brown semi-bold">
              Select Toppings
            </h5>
            <div class="toppings" role="group">
              <button v-for="(topping, index) in toppings" :key="index" class="topping" :class="getActiveClass(topping.name)" @click="addTopping(topping), makeActive(topping.name)">
                <p class="brown topping-price">
                  N{{ topping.price }}
                </p>
                <img class="topping-image" :src="topping.image" :alt="topping.name">
                <p class="brown">
                  {{ topping.name }}
                </p>
              </button>
            </div>
          </div>
          <div class="total">
            <h6 class="brown">
              Total:
            </h6>
            <h2 v-if="selectedItemTotal" class="brown semi-bold">
              N{{ selectedItemTotal }}
            </h2>
          </div>
        </div>
        <button class="btn add-to-cart" @click="addToCart, clearActive">
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
    ...mapMutations(['toggleSelectFromSelect', 'addToCart', 'selectSize', 'addTopping']),
    getActiveClass (id) {
      const foundItem = this.activeId.find((item) => {
        return item === id
      })
      if (foundItem) {
        return 'active'
      } else {
        return ''
      }
    },
    getActiveSize (id) {
      if (id === this.sizeId) {
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
    clearActive () {
      this.activeId = []
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
div.toppings {
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
}
button.topping {
  border: #DED8D8 1px solid;
  border-radius: 5px;
  margin: 5px;
  height: 115px;
  width: 115px !important;
}
img.topping-image {
  max-height: 51px;
  max-width: 77px;
}
p.topping-price {
  margin-bottom: 0 !important;
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
</style>
