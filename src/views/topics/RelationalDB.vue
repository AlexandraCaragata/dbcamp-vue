<template>
  <div class="rational-database-page">
    <!-- TOPIC: SQL -->
    <TopicPage
      :topicName="newName"
      :topicIcon="newIcon"
      :topicText="newText"
      :videoTutorials="newTutorials"
    ></TopicPage>

    <!-- TAKE-THE-QUIZ SECTION  -->
    <section class="quiz-section">
      <div class="go-to-quiz">
        <h2>TAKE THE QUIZ</h2>
        <p>And get a diploma</p>
        <button class="btn-goToQuiz" v-on:click="goToQuiz">START</button>
      </div>
    </section>

    <div class="forum-container">
      <ForumChatBanner></ForumChatBanner>
    </div>
  </div>
</template>

<style lang="scss" >
// QUIZ SECTION
.quiz-section {
  margin: 40px 0px;
  background-image: url("../../assets/friends-codeing.jpg");
  width: 100%;
  height: 600px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: inset 0 0 0 2000px rgba(245, 243, 243, 0.26);
}

.go-to-quiz {
  width: 500px;
  background-color: rgba(245, 245, 245, 0.842);
  text-align: center;
  padding: 25px;
  position: absolute;
  top: 50%;
  left: 78%;
  transform: translate(-50%, -50%);
}
.go-to-quiz > p {
  text-align: center;
  font-size: 40px;
  margin-top: 0;
}
.go-to-quiz > h2 {
  font-size: 40px;
  margin-bottom: 0;
}
.btn-goToQuiz {
  width: 350px;
  margin-bottom: 20px;
  font-size: 25px;
  cursor: pointer;
}

//FORUM BANNER
.forum-container {
  width: 1000px;
  margin: auto;
  margin-bottom: 40px;
}
</style>


<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicPage from "../../components/topics/TopicPage";
import router from "../../router";
import {mapActions} from "vuex";

export default {
  name: "RelationalDB",
  components: { TopicPage, ForumChatBanner },
  data: function() {
    return {
      newName: "Rational Database",
      newIcon: "purple.png",
      newText:
        "Kt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      newTutorials: [
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
            "kldklx ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
        }
      ]
    };
  },
  methods: {
    ...mapActions([
       'fetchQuiz',
    ]),
    goToQuiz: function() {
      router.push({ name: 'quiz', params: { quizId: 1 }});
    }
  }
};
</script>