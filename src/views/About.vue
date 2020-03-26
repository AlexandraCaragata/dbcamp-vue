<template>
  <div class="about">
    {{this.apiMessage}}
    <!-- ABOUT SECTION -->
    <div class="about-container">
      <div class="about-text">
        <h1>Who are we...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident porro iure numquam tempora nam, deserunt maiores nemo illum alias accusamus voluptatibus eius dicta sit, consequatur obcaecati nostrum quibusdam delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />Eligendi numquam nisi minus eum veritatis quasi asperiores, modi sapiente. Dicta fuga magnam est maxime repudiandae explicabo vero adipisci tempora quod quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident! Voluptate, explicabo? Tempore deserunt voluptatem architecto error aperiam repellendus sit omnis.
        </p>
      </div>
      <div class="about-img">
        <img src="../assets/girls-laughing.jpg" alt />
        <img src="../assets/passion.jpg" alt />
      </div>
    </div>

    <!-- SIGN UP SECTION -->
    <SignupSection></SignupSection>

    <div class="gap"></div>
    <!-- BOTTOM SECTION -->
    <VisionMission></VisionMission>
  </div>
</template>

<style lang="scss">
// ABOUT SECTION
.about-container {
  margin: auto;
  padding: 0px 120px;
}
.about-text {
  line-height: 1.5;
  font-weight: 100;
}
.about-text > h1 {
  text-align: left;
}
.about-img {
  display: flex;
  margin: 60px 0px;
}

.about-img > img {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin-right: 10px;
  border-radius: 5px;
}
.gap {
  margin: 60px 0px;
}
</style>

<script>
import SignupSection from "@/components/layout/SignupSection";
import VisionMission from "@/components/layout/VisionMission";
export default {
  name: "About",
  components: { SignupSection, VisionMission },
  data: function() {
    return {
      apiMessage: ""
    };
  }
};
</script>
