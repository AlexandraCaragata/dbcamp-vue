<template>
  <div class="home">
    {{this.apiMessage}}
    <!-- SPLASH SECTION -->
    <div class="splash-container">
      <div class="splash-text">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
  font-size: 45px;
  text-align: left;
  color: #354865;
}
.splash-text > p {
  color: black;
  line-height: 1.5;
  font-size: 20px;
  font-weight: 100;
}
.splash-text {
  padding-top: 10vh;
  padding-left: 25vh;
  text-align: left;
  width: 400px;
}

.btn-goToSignup {
  background-color: #354865;
  width: 120px;
  height: 40px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: #354865;
  border-radius: 5px;
  cursor: pointer;
}

// STEPS SECTION
.steps-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: black;
  margin-top: 15px;
  margin-bottom: 20px;
}
.step {
  width: 180px;
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
  min-width: 100px;
}

// SIGN UP SECTION

// BOTTOM SECTION
</style>
<script>
import SignupSection from "@/components/layout/SignupSection";
import VisionMission from "@/components/layout/VisionMission";
export default {
  name: "Home",
  components: { SignupSection, VisionMission },
  data: function() {
    return {
      apiMessage: "",
      steps: [
        {
          stepId: 1,
          stepH3: "This is a cool text for step one",
          stepP: "Here we have some other really cool text for step one.",
          stepIcon: "icon_template.png"
        },
        {
          stepId: 2,
          stepH3: "This is a cool text for step two",
          stepP: "Here we have some other really cool text for step two.",
          stepIcon: "icon_learningpath.png"
        },
        {
          stepId: 3,
          stepH3: "This is a cool text for step three",
          stepP: "Here we have some other really cool text for step three.",
          stepIcon: "icon_access.png"
        },
        {
          stepId: 4,
          stepH3: "This is a cool text for step four",
          stepP: "Here we have some other really cool text for step four.",
          stepIcon: "icon_analytics.png"
        }
      ]
    };
  },
  created: function() {
    this.getMessageFromApi();
  },
  methods: {
    getMessageFromApi: async function() {
      const connection = await fetch("http://localhost/db-camp/api-test.php");
      this.apiMessage = await connection.json();
    },
    goToSignup: function() {
      location.href = "/signup";
    }
  }
};
</script>