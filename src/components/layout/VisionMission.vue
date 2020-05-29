<template>
  <div class="bottom-container">
    <div class="bottom-text">
      <p>
        Our mission is to help everyone, regardless of expertise, to understand Databases, what they are used for and how they can be used. We want to simplify Databases by developing educational materials with relatable examples from everyday life. Our e-learning system aims to guide you through Databases in a fun, simple and educational way whenever YOU have the time for it.
        </p><p>Join the journey and become a better developer!
      </p>
      <button v-on:click="goToSignup" class="btn-signUp">Try a course for free!</button>
    </div>
  </div>
</template>
<style>
.bottom-container {
  top: 0;
  background-image: url("../../assets/girl-with-computer.jpg");
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(224, 224, 224, 0.3);
  position: relative;
  margin-bottom: 50px;
}
.bottom-text {
  width: 270px;
  background-color: #9b646f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  font-size: 16px;
  text-align: center;
}

.btn-signUp{
  background-color: white;
  color: #2e4e6b;
  width: 100%;

}

@media screen and (min-width: 450px) {
    .bottom-container {
    margin-bottom: 100px;
  }
  .bottom-text {
    width: 600px;
    top: 80%;
    left: 50%;
    padding: 20px;
    font-size: 22px;
  }
  .btn-signUp{
  font-size: 20px;
  height: 50px;
  width: 40%;
}

}
@media screen and (min-width: 970px) {
  .bottom-container {
    margin-bottom: 250px;
  }
  .bottom-text {
    width: 900px;
    top: 95%;
    left: 50%;
    padding: 30px;
    font-size: 25px;
  }
}
</style>
<script>
export default {
  name: "VisionMission.vue",
    methods: {
    goToSignup: function() {
      location.href = "/sign-up";
    }
  }
};
</script>