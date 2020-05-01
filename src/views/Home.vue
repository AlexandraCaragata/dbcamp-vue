<template>
  <div class="home">
    <!-- SPLASH SECTION -->
    <div class="splash-container">
      <div class="splash-text">
        <h1>Welcome</h1>
        <p>We aim to make our e-learning system about Databases, relevant and interesting for all no matter expertise.</p>
        <button v-on:click="goToSignup" class="btn-goToSignup">Sign up</button>
      </div>
    </div>

    <!-- STEPS SECTION -->
    <div class="steps-container">
      <div class="step" v-for="step in steps" v-bind:key="step.stepId">
        <img class="icon" :src="require(`../assets/icons/${step.stepIcon}`)" alt="icon" />
        <h3>{{step.stepH3}}</h3>
        <p>{{step.stepP}}</p>
      </div>
    </div>

    <!-- SIGN UP SECTION -->

    <SignupSection></SignupSection>

    <!-- BOTTOM SECTION -->
    <VisionMission></VisionMission>
  </div>
</template>
<style lang="scss">
// SPLASH SECTION
.splash-container {
  top: 0;
  background-image: url("../assets/hand-and-computer.jpg");
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.splash-text > h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 30px;
  text-align: left;
  color: #354865;
}
.splash-text > p {
  color: black;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 100;
}
.splash-text {
  padding-top: 10vh;
  padding-left: 5vh;
  text-align: left;
  width: 200px;
}

.btn-goToSignup {
  background-color: #354865;
  width: 200px;
  height: 40px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: #354865;
  border-radius: 5px;
  cursor: pointer;
}

// STEPS SECTION
.steps-container {
  display: grid;
  grid-template-columns: 1fr;
  color: black;
  margin-top: 15px;
  margin-bottom: 20px;
}
.step {
  width: 250px;
  margin: auto;
}
.step > h3,
p {
  text-align: left;
}
.step > h3 {
  margin: 0;
  text-transform: uppercase;
}
.step > p {
  font-weight: 100;
}
.step > .icon {
  width: 100%;
  height: 100%;
  max-width: 70px;
}

@media screen and (min-width: 450px) {
  // SPLASH SECTION
.splash-container {
  height: 440px;
}
  .splash-text {
    padding-left: 10vh;
    width: 300px;
  }
    // STEPS SECTION
  .steps-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .step > .icon {
  min-width: 130px;
}
}

@media screen and (min-width: 970px) {
  // SPLASH SECTION
  .splash-container {
  height: 650px;
}
  .splash-text > h1 {
    font-size: 45px;
  }
  .splash-text > p {
    font-size: 20px;
  }
  .splash-text {
    padding-left: 25vh;
    width: 400px;
  }

  .btn-goToSignup {
    font-size: 20px;
  }

  // STEPS SECTION
  .steps-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .step > .icon {
  min-width: 180px;
}

}
</style>
<script>
import SignupSection from "@/components/layout/SignupSection";
import VisionMission from "@/components/layout/VisionMission";
export default {
  name: "Home",
  components: { SignupSection, VisionMission },
  data: function() {
    return {
      steps: [
        {
          stepId: 1,
          stepH3: "Learn Databases remotely",
          stepP: "You can easily learn Databases wherever you go and whenever you have the time for it.",
          stepIcon: "icon_access.png"
        },
        {
          stepId: 2,
          stepH3: "Learn step by step",
          stepP: "You choose the topic you want to know more about. Learn by simple video tutorials, concrete and relatable examples, and finish off with a fun quiz.",
          stepIcon: "icon_learningpath.png"
        },
        {
          stepId: 3,
          stepH3: "Keep track of your progress",
          stepP: "See which courses you have completed and keep track of the scores you get from taking the quizzes.",
          stepIcon: "icon_analytics.png"
        },
        {
          stepId: 4,
          stepH3: "Get a cool diploma when you finish a topic",
          stepP: "Show the diploma to your friends, your colleagues or even to your next job interview.",
          stepIcon: "icon_template.png"
        }
      ]
    };
  },
  methods: {
    goToSignup: function() {
      location.href = "/sign-up";
    }
  }
};
</script>