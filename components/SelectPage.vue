<template>
  <div class="backdrop">
    <div class="select-modal">
      <div class="selected">
        <img src="../assets/images/select-page-pizza.png" alt="selected pizza">
      </div>
      <div class="pizza-info">
        <button class="close-modal btn" @click="toggleSelect">
          <i class="fa-solid fa-xmark" />
        </button>
        <div class="cont">
          <div class="info">
            <h2 class="brown semi-bold">
              {{ selected.name }}
            </h2>
            <h6 class="brown">
              {{ selected.ingredients }}
            </h6>
          </div>
          <div class="size">
            <h5 class="brown semi-bold">
              Select Size
            </h5>
            <div class="row">
              <button class="select brown">
                <span class="button-text">Regular</span>
              </button>
              <button class="select brown">
                <span class="button-text">Thin</span>
              </button>
              <button class="select brown">
                <span class="button-text">Large</span>
              </button>
            </div>
          </div>
          <div class="select-toppings">
            <h5 class="brown semi-bold">
              Select Toppings
            </h5>
          </div>
          <div class="total">
            <h6 class="brown">
              Total:
            </h6>
            <h2 class="brown semi-bold">
              {{ selected.price }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPage',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    selected: Object
  },
  emits: ['togglePage'],
  methods: {
    toggleSelect () {
      this.$emit('togglePage')
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
    margin: 100px auto;
    display: flex;
    position: relative;
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
}
.pizza-info {
    padding: 20px;
}
button.select {
    border: #5d3801 1px solid;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
</style>
