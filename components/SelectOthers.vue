<template>
  <div
    class="backdrop"
    @wheel.prevent
    @touchmove.prevent
    @scroll.self.prevent
    @touch.self="toggleSelectOthersFromSelect"
    @click.self="toggleSelectOthersFromSelect"
  >
    <div class="select-modal">
      <div class="selected">
        <div class="image">
          <img class="img-fluid" :src="selectedItem.image" :alt="selectedItem.name">
        </div>
        <div class="info">
          <button class="close-modal btn" @click="toggleSelectOthersFromSelect()">
            <i class="fa-solid fa-xmark" />
          </button>
          <h2 class="brown semi-bold">
            {{ selectedItem.name }}
          </h2>
          <p class="brown">
            {{ selectedItem.description }}
          </p>
          <h4 class="brown semi-bold">
            Price:
          </h4>
          <h2 class="brown semi-bold">
            N{{ selectedItem.price }}
          </h2>
          <!-- cart button -->
          <button class="btn add-to-cart" @click="addOthersToCart(selectedItem)">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'SelectOthers',
  computed: {
    ...mapState(['selectedItem'])
  },
  methods: {
    ...mapMutations(['toggleSelectOthersFromSelect', 'addOthersToCart'])
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
    height: 70vh;
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
div.selected {
    display: flex;
}
div.image {
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
}
div.info {
    margin-left: 20px;
}
div.info p, div.info h2 {
    width: 70%;
}
img {
    max-width: 400px;
    max-height: 400px;
}
button.add-to-cart {
    position: absolute;
    bottom: 20px;
    right: 20px;
}
@media (max-width: 768px) {
    div.select-modal {
        height: 550px;
        width: 90vw;
    }
    div.selected {
        flex-direction: column;
    }
    div.image {
        width: 300px;
        height: 300px;
    }
    img {
    max-width: 300px;
    max-height: 300px;
    }
    div.info p, div.info h2 {
    width: 90%;
    }
}
@media (max-width: 500px) {
  div.image {
    height: 200px;
    width: 200px;
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }
}
</style>
