<template>
  <div class="footer">
    <div class="row">
      <div class="brandy col-lg-4 col-md-4 col-sm-4">
        <div class="brand">
          <h1>Brand</h1>
          <h5>{Brand Name}</h5>
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
      <div class="col-lg-2 col-md-2 col-sm-2">
        <h5>Quick Links</h5>
        <a class="footer-link" href="">Home</a>
        <a class="footer-link" href="">About Us</a>
        <a class="footer-link" href="">Contact Us</a>
        <a class="footer-link" href="">FAQs</a>
        <a class="footer-link" href="">Privacy Policy</a>
        <a class="footer-link" href="">Terms of Service</a>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2">
        <h5>Connect With Us</h5>
        <a class="footer-link" href="">Facebook</a>
        <a class="footer-link" href="">Twitter</a>
        <a class="footer-link" href="">Instagram</a>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
        <h5>We Accept</h5>
        <a href="#" class="payment"><img src="../../assets/images/mastercard.png" alt=""></a>
        <a href="#" class="payment"><img src="../../assets/images/visa.png" alt=""></a>
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
</style>
