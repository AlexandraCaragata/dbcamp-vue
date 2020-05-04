<template>
  <div class="web-front-end-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: web-front-end -->
    <TopicPage
        :topicName="topic.name"
        :topicIcon="topic.iconName"
    >
      <div>
        <p>Since SQL is not Turing complete, the business logic should be executed outside the DBMS, which is then only invoked for the execution of the corresponding queries.</p>
        <p>Programming languages offer different solutions to access the database from inside your application. There are two approaches to accessing SQL:</p>
        <p><em>Embedded SQL</em> A preprocessor submits the SQL statements to the DBMS. SQL-related errors will be caught at compile time, before execution takes place.</p>
        <p><em>Dynamic SQL</em> The SQL queries are written and stored in the programming language, then submitted to the DBMS via a database driver. The result returned by the DBMS are then stored into variables of the programming language.</p>

        <p>One example of how to connect to a database is by using PDO (PHP Data Objects). It offers:</p>
        <p><em>Coding consistency</em> Single uniform interface no matter which database is being accessed</p>
        <p><em>Flexibility</em> Database drivers are loaded runtime</p>
        <p><em>Object-Oriented Features</em></p>
        <p><em>Performance</em></p>

        <p>In the images bellow you can see an example of how you can connect to a database by using PDO</p>
        <img src="../../assets/PDOConnect.png" alt="">
        <img src="../../assets/PDOAdd.png" alt="">

        <h3>Watch the videos for more information!</h3>
      </div>
    </TopicPage>

    <VideoTutorials :videoTutorials="videoTutorials"></VideoTutorials>

    <TakeAQuizSection :topic="topic"></TakeAQuizSection>

    <div class="forum-container">
      <ForumChatBanner></ForumChatBanner>
    </div>
  </div>
</template>

<style lang="scss" >
//FORUM BANNER
.forum-container {
  width: 1000px;
  margin: auto auto 40px;
}
</style>


<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicPage from "../../components/topics/TopicPage";
import {mapGetters} from "vuex";
import router from "../../router";
import VideoTutorials from "../../components/layout/VideoTutorials";
import TakeAQuizSection from "../../components/layout/TakeAQuizSection";
export default {
  name: "web-front-end-page",
  components: {TopicPage, ForumChatBanner, VideoTutorials, TakeAQuizSection },
  data: function() {
    return {
      videoTutorials: [
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
  computed: {
    ...mapGetters([
      'getTopicByLink',
      'haveTopicsLoaded',
    ]),
    topic() {
      if (this.haveTopicsLoaded) {
        return this.getTopicByLink(this.$route.name);
      }
    }
  },
  methods: {
    goToQuiz: function() {
      router.push({ name: 'quiz', params: { quizId: this.topic.quiz_id }});
    }
  }
};
</script>
