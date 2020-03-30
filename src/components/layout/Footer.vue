<template>
  <footer>
    <div class="follow-us">
      <h3>Follow us</h3>
      <div>icons for social media</div>
    </div>

    <div class="contact">
      <h3>Contact</h3>
      <div>some contact</div>
    </div>

    <div class="address">
      <h3>Address</h3>
      <div>some address</div>
    </div>

    <div class="logo">
      <img src="../../assets/logo.png" alt />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 15vh;

  bottom: 0;
  /* position: absolute; */
  width: 100vw;

  background-color: #d3cecb;
}

div.follow-us {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}

div.logo {
  align-self: center;
  margin-right: 3vw;
}
</style>

<script>
export default {
  name: "Footer.vue"
};
</script>

