<template>
  <div class="foot">
    <footer>
      <div class="follow-us">
        <h3>Follow us</h3>
        <div class="follow-us-logos">
          <img src="../../assets/footer-icons/fb-logo.png" />
          <img src="../../assets/footer-icons/linkedin-logo.png" />
        </div>
      </div>

      <div class="contact">
        <h3>Contact</h3>
        <div>+45 68 38 48 57</div>
        <div>info@dbcamp.com</div>
      </div>

      <div class="address">
        <h3>Address</h3>
        <div>Ved Stranden 4, København SV, DK</div>
      </div>

      <div class="helpful-links">
        <h3>Helpful links</h3>

        <a href="https://uxplanet.org/">uxplanet.org</a>
        <a href="#">w3schools.com</a>
        <a href="#">freecodecamp.com</a>
        <a href="#">build-databases.com</a>
      </div>

      <div class="logo-container">
        <a href="/">
          <img class="logo" src="../../assets/logo.png" alt />
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 2vh 0 0 0;
  position: absolute;
  bottom: -10;
  width: 100%;
  background-color: #ebe5e1;
}

div.follow-us {
  margin-left: 3vw;

  .follow-us-logos {
    img {
      width: 40px;
      height: 40px;
    }
  }
}
.helpful-links > a {
  display: block;
}

div.logo-container {
  margin-right: 3vw;
}
.logo {
  max-width: 200px;
}

@media screen and (max-width: 770px) {
  footer {
    display: block;
    height: 100%;
  }
  footer > div:not(:last-child) {
    margin: 20px;
  }
}
</style>

<script>
export default {
  name: "Footer.vue"
};
</script>

