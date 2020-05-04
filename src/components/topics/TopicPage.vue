<template>
  <div>
    <!-- TEXT SECTION -->
    <div class="text-section">
      <div class="headingOne-wrapper">
        <h1>{{topicName}}</h1>
        <img :src="require(`../../assets/icons/${topicIcon}`)" alt="sql" />
      </div>

      <div class="text-container"><slot></slot></div>
    </div>
  </div>
</template>

<style lang="scss">
// TEXT SECTION
.text-section {
  padding: 0 15px;
}
.headingOne-wrapper {
  display: flex;
}
.headingOne-wrapper > img {
    height: 100%;
    max-height: 60px;
    margin-top: 10px;
}
.headingOne-wrapper > h1 {
  font-weight: 400;
  margin-bottom: 0;
}

p {
  font-weight: 100;
}

.text-container {
  width: 90%;
  margin: 0 auto;
}

// VIDEO TUTORIAL
.tutorial-wrapper {
  padding: 0 10px;
}

.video-tutorial {
  width: 100%;
  margin: auto;
}

.video-tutorial > h2 {
  text-align: left;
  margin-bottom: 0;
}

.video-tutorial > p {
  margin-top: 0;
}

iframe {
  border-radius: 5px;
  width: 100%;
  height: 315px;
}

@media screen and (min-width: 900px) {
  .text-section {
  padding: 50px 80px;
}
.headingOne-wrapper > img {
  margin-left: -20px;
  height: 100%;
  max-height: 80px;
  margin-top: -10px;
}

// VIDEO TUTORIAL
.tutorial-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 50px;
}
.video-tutorial {
  width: 400px;
  margin: auto;
}
}

@media screen and (min-width: 1100px) {
  // TEXT SECTION
  .text-section {
    padding: 50px 80px;
  }
  .headingOne-wrapper > img {
    margin-left: -20px;
    height: 100%;
    max-height: 80px;
    margin-top: -10px;
  }

  // VIDEO TUTORIAL
  .tutorial-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px;
  }
  .video-tutorial {
    width: 400px;
    margin: auto;
  }
}
</style>

<script>
export default {
  name: "TopicPage",
  props: {
    topicName: String,
    topicIcon: String,
  }
};
</script>
