<template>
  <section id="locations" class="container-fluid">
    <h3 class="brown index-header">
      Select Location
    </h3>
    <div class="row">
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6">
        <button>
          <div class="card">
            <div class="card-header">
              <h3>Brand Name</h3>
            </div>
            <div class="card-body">
              <h4>Surulere</h4>
              <h4>Branch</h4>
            </div>
          </div>
        </button>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6">
        <button>
          <div class="card">
            <div class="card-header">
              <h3>Brand Name</h3>
            </div>
            <div class="card-body">
              <h4>Surulere</h4>
              <h4>Branch</h4>
            </div>
          </div>
        </button>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6">
        <button>
          <div class="card">
            <div class="card-header">
              <h3>Brand Name</h3>
            </div>
            <div class="card-body">
              <h4>Surulere</h4>
              <h4>Branch</h4>
            </div>
          </div>
        </button>
      </div>
      <div class="col-lg-6 col-md-4 col-sm-12 d-flex create-pizza-container">
        <button>
          <img class="create-pizza" src="../assets/images/create-your-pizza.png" alt="create your pizza">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Locations'
}
</script>

<style scoped>
button {
  border: none;
  background: none;
  padding: 0;
}
div.card {
  width: 180px;
}
div.create-pizza-container {
    justify-content: center;
}
@media (min-width: 769px) and (max-width: 992px) {
  div.row {
    justify-content: center;
  }
  img.create-pizza {
    transform: scale(0.8);
  }
}
@media (max-width:768px) {
  div.card {
    width: auto;
    height: auto !important;
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;
  }
  div.row {
    justify-content: center;
  }
}
</style>
