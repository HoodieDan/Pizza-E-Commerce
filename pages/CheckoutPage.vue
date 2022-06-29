<template>
  <div class="container brown semi-bold">
    <!-- Personal Details  -->
    <div class="sect">
      <h2>
        Checkout
      </h2>
      <h3>
        Personal Details
      </h3>
      <form action="/" class="row">
        <div class="item col-6 col-sm-5">
          <label for="firstName">First Name:</label> <br>
          <input class="text-field" type="text" name="firstName" placeholder="First Name">
        </div>
        <div class="item col-6 col-sm-5">
          <label for="lastName">Last Name:</label> <br>
          <input class="text-field" type="text" name="lastName" placeholder="Last Name">
        </div>
        <div class="item col-6 col-sm-5">
          <label for="email">Email Address:</label> <br>
          <input class="text-field" type="email" name="email" placeholder="Enter Address">
        </div>
        <div class="item col-6 col-sm-5">
          <label for="phoneNo">Phone Number:</label> <br>
          <input class="text-field" type="text" name="phoneNo" placeholder="Enter Number">
        </div>
      </form>
    </div>

    <!-- Delivery Details -->
    <div class="sect">
      <h3>Delivery Details</h3>
      <form action="/" class="row">
        <div class="item col-6 col-sm-5">
          <label for="address">Delivery Address:</label> <br>
          <input class="text-field" type="text" name="address" placeholder="Enter Address">
        </div>
        <div class="item col-6 col-sm-5">
          <label for="city">City:</label> <br>
          <input class="text-field" type="text" name="city" placeholder="Enter City">
        </div>
      </form>
    </div>

    <!-- Payment Method  -->
    <div class="sect">
      <h3>Payment Method</h3>
      <form action="/">
        <!-- Debit Card  -->
        <div class="radio-button">
          <input id="" type="radio" name="pay">
          <label for="">
            Debit Card
            <img src="../assets/images/mastercard.png" alt="mastercard">
            <img src="../assets/images/visa.png" alt="visa">
          </label>
        </div>
        <!-- Cash -->
        <div class="radio-button">
          <input id="" type="radio" name="pay">
          <label for="">
            Cash
          </label>
        </div>
        <!-- Card on Delivery -->
        <div class="radio-button">
          <input id="" type="radio" name="pay">
          <label for="">
            Card on Delivery
            <img src="../assets/images/mastercard.png" alt="mastercard">
            <img src="../assets/images/visa.png" alt="visa">
          </label>
        </div>
      </form>
    </div>
    <button type="submit" class="btn mt-5">
      Proceed
    </button>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage'
}
</script>

<style scoped>
div.container {
  margin-top: 100px !important;
  margin-bottom: 100px !important;
}
input.text-field {
  width: 90%;
  margin-bottom: 10px;
  border: rgb(0,0,0,0.3) 1px solid;
  border-radius: 5px;
  height: 30px;
  padding: 5px 15px;
  color: #5D3801;
}
input::placeholder {
  color: rgb(0,0,0,0.3);
}
input:focus,
input:active {
  outline-color: #5D3801;
}
div.sect:nth-of-type(2),
div.sect:nth-of-type(3) {
  margin-top: 40px;
}
div.radio-button {
  border: rgb(0,0,0,0.3) 1px solid;
  width: 300px;
  margin: 20px 0;
  padding: 10px 15px 5px;
  border-radius: 5px;
}
input[type='radio'] {
  margin-right: 10px;
}
label img {
  max-height: 21px;
  max-width: 45px;
}
</style>
