<template>
  <div class="about">
    {{this.apiMessage}}
    <!-- ABOUT SECTION -->
    <div class="about-container">
      <div class="about-text">
        <h1>Who are we...</h1>
        <p>
          We’re a Copenhagen-based community that helps you to learn developing projects with databases by simple video tutorials, relatable examples from everyday life and fun quizzes to get your knowledge into praxis. And as a bonus you’ll also earn diplomas along the way to show to your teachers, your coworkers or even to your next job interview. 
        </p>
        <p>We have developed an e-learning system that aims to simplify knowledge about Databases and teach everyone, regardless of expertise, how to get started with building projects with a database.

<br><br>Our e-learning system uses short and simple texts, interesting and informative videos and always ends with a fun quiz that requires you to make use of your new knowledge. 
</p>
        <p>One of the challenges of e-learning systems is that you are missing the discussions with your friends and their perspectives. We have tried to address this problem by creating a community where everyone, regardless of level and expertise, can come together and help each other. You can ask questions to other students at DB Camp or to DB Camp's own experts.</p>
        <h3>We would love to help you with your specific project!</h3>

      </div>
      <div class="about-img">
        <img src="../assets/girls-laughing.jpg" alt />
        <img src="../assets/passion.jpg" alt />
      </div>
    </div>

    <!-- SIGN UP SECTION -->
    <SignupSection></SignupSection>

    <!-- BOTTOM SECTION -->
    <VisionMission></VisionMission>
  </div>
</template>

<style lang="scss">
// ABOUT SECTION
.about-container {
  margin: auto;
  padding: 0px 12px;
}
.about-text {
  line-height: 1.5;
  font-weight: 100;
}
.about-text > h1, h3 {
  text-align: left;
}
.about-img {
  display: block;
  margin: 10px 0px;
}

.about-img > img {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin-right: 10px;
  border-radius: 5px;
}

@media screen and (min-width: 450px) {
    .about-img {
    display: flex;
    text-align: center;
    margin-left: 18px;
  }
  .about-img > img {
    max-width: 350px;
  }
}

@media screen and (min-width: 1025px) {
  .about-container {
    margin: auto;
    padding: 0px 120px;
  }
  .about-img {
    display: flex;
    margin: 60px 0px;
  }
  .about-img > img {
  max-width: 600px;
}

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
