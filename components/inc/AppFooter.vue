<template>
  <div class="footer container-fluid">
    <div class="container">
      <div class="row">
        <div class="brandy col-lg-5 col-md-5 col-sm-12">
          <div class="brand">
            <h4 class="logo">Wow<span class="green">Pizzas</span></h4>
            <h5>By Drew</h5>
            <p class="footer-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aut?
            </p>
          </div>
          <div class="copyright">
            <p class="footer-foot">
              ©2022 {Brand Name}.
            </p>
            <p class="footer-foot">
              All Rights Reserved
            </p>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
          <h5>Quick Links</h5>
          <a class="footer-link" href="">Home</a>
          <a class="footer-link" href="">About Us</a>
          <a class="footer-link" href="">Contact Us</a>
          <a class="footer-link" href="">FAQs</a>
          <a class="footer-link" href="">Privacy Policy</a>
          <a class="footer-link" href="">Terms of Service</a>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
          <h5>Connect With Us</h5>
          <a class="footer-link" href=""><img src="../../assets/images/facebook.svg" alt="facebook svg"> Facebook</a>
          <a class="footer-link" href=""><img src="../../assets/images/twitter.png" alt="twitter png"> Twitter</a>
          <a class="footer-link" href=""><img src="../../assets/images/instagram.png" alt="instagram png"> Instagram</a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4">
          <h5>We Accept</h5>
          <a href="#" class="payment"><img src="../../assets/images/mastercard.png" alt="mastercard"></a>
          <a href="#" class="payment"><img src="../../assets/images/visa.png" alt="visa"></a>
          <a href="" class="payment"><img class="verve" src="../../assets/images/verve.svg" alt="verve"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
div.footer {
  background-color: #5D3801;
  color: #FFF;
  padding: 3% 2%;
}
div.brandy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.brand img {
  max-width: 39px;
  margin-bottom: 10px;
}
a.footer-link {
  color: #FFF;
  display: block;
  font-size: 0.8rem;
  margin-top: 20px;
  margin-bottom: 20px;
}
p.footer-p {
  font-size: 0.8rem;
  margin-top: 20px;
  margin-bottom: 20px;
}
p.footer-foot {
  font-size: 0.8rem;
}
a.payment {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
img.verve {
  width: 150px;
}
@media (max-width: 768px) {
  div.row {
  margin-right: 0;
}
  .col-sm-12 {
    margin-bottom: 50px;
  }
}
@media (max-width: 575px) {
  .col-xs-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  img.verve {
  width: 100px;
  }
}
@media (max-width: 400px) {
  a.payment img {
    width: 50px;
  }
}
</style>
