<template>
  <div class="bottom-container">
    <div class="bottom-text">
      <p>
        Our vision is dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />Our mission is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
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
  margin-bottom: 250px;
}
.bottom-text {
  width: 900px;
  background-color: #9b646f;
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 30px;
  font-size: 25px;
}
</style>
<script>
export default {
  name: "VisionMission.vue"
};
</script>