<template>
  <footer>
    <div class="follow-us">
      <h3>Follow us</h3>
      <div class="follow-us-logos">
        <img src="../../assets/footer-icons/fb-logo.png"/>
        <img src="../../assets/footer-icons/linkedin-logo.png"/>
      </div>
    </div>

    <div class="contact">
      <h3>Contact</h3>
      <div>11223344</div>
      <div>email@gmail.com</div>
    </div>

    <div class="address">
      <h3>Address</h3>
      <div>some address</div>
    </div>

    <div class="helpful-links">
      <h3>Helpful links</h3>
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
    padding: 2vh 0 0 0;

		height: 15vh;

		bottom: 0;
		width: 100vw;

		background-color: #d3cecb;
	}

	div.follow-us {
		display: flex;
		flex-direction: column;
		margin-left: 3vw;

    .follow-us-logos {
      display: flex;
      flex-direction: row;

      img {
        width: 40px;
        height: 40px;
      }
    }
	}

	div.logo {
		margin-right: 3vw;
	}
</style>

<script>
export default {
  name: "Footer.vue"
};
</script>

