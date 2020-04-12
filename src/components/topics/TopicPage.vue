<template>
  <div>
    <!-- TEXT SECTION -->
    <div class="text-section">
      <div class="headingOne-wrapper">
        <h1>{{topicName}}</h1>
        <img :src="require(`../../assets/icons/${topicIcon}`)" alt="sql" />
      </div>
      <p>{{topicText}}</p>
    </div>

    <!-- VIDEO TUTORIALS  -->
    <div class="tutorial-wrapper">
      <div
        class="video-tutorial"
        v-for="tutorial in videoTutorials"
        v-bind:key="tutorial.tutorialId">
        <iframe
          :src="tutorial.videoLink"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>{{tutorial.tutorialName}}</h2>
        <p>{{tutorial.tutorialText}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// TEXT SECTION
.text-section {
  padding: 50px 80px;
}
.headingOne-wrapper {
  display: flex;
}
.headingOne-wrapper > img {
  margin-left: -20px;
  height: 100%;
  max-height: 80px;
  margin-top: -10px;
}
.headingOne-wrapper > h1 {
  font-weight: 400;
  margin-bottom: 0;
}
p {
  font-weight: 100;
}

// VIDEO TUTORIAL
.tutorial-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px 50px;
}
.video-tutorial {
  width: 400px;
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
</style>

<script>
export default {
  name: "TopicPage",
  props: {
    topicName: {
      type: String,
      default: "Name of topic"
    },
    topicIcon: {
      type: String,
      default: "salmon.png"
    },
    topicText: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    videoTutorials: {
      type: Array,
      default: [
        {
          tutorialId: 1,
          videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
          tutorialName: "First Course",
          tutorialText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
        },
        {
          tutorialId: 2,
          videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
          tutorialName: "Second Course",
          tutorialText:
            "Korem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
        },
        {
          tutorialId: 3,
          videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
          tutorialName: "Third Course",
          tutorialText:
            "Horem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
        }
      ]
    }
  }
};
</script>