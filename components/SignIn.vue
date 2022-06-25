<template>
  <div
    class="backdrop"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    @click.self="toggleSign"
    @touch.self="toggleSign"
  >
    <div class="sign-in-modal">
      <img class="top-left" src="../assets/images/top-pizza-sign-in.png" alt="top pizza">
      <button class="close-modal btn" @click="toggleSign">
        <i class="fa-solid fa-xmark" />
      </button>
      <div class="sign-in">
        <h2 class="semi-bold brown">
          SIGN IN
        </h2>
        <label for="phone-no" class="brown">Enter Your Phone Number:</label>
        <input type="text">

        <div class="button">
          <button class="otp btn">
            Send OTP
          </button>
        </div>
        <img class="bottom-right" src="../assets/images/bottom-pizza-sign-in.png" alt="bottom-pizza">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['toggle-sign'],
  methods: {
    toggleSign () {
      this.$emit('toggle-sign')
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
    text-align: center;
}
input {
  border: 2px solid rgb(93,56,1,0.2);
  border-radius: 5px;
  width: 100%;
  color: #5D3801;
}
div.sign-in {
  margin: auto;
}
div.sign-in-modal {
    width: 400px;
    height: 400px;
    background: #FFF;
    margin: auto auto;
    padding: 2% 5%;
    display: flex;
    flex-direction: column;
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
div.button {
  display: flex;
  justify-content: center;
}
.otp {
  margin: 50px auto !important;
}
.top-left {
  position: absolute;
  top: 0;
  left: 0;
}
.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
@media (max-width: 450px) {
  .sign-in {
    padding: 2% 7% !important;
  }
  .sign-in-modal {
    width: 300px !important;
    height: 300px !important;
  }
  .otp {
    margin: 20px auto !important;
  }
}
</style>
