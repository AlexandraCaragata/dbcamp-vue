<template>
  <div class="web-front-end-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: web-front-end -->
    <TopicPage
        :topicName="topic.name"
        :topicIcon="topic.iconName"
    >
      <div class="topicText">
        <p>Since SQL is not Turing complete, the business logic should be executed outside the DBMS, which is then only invoked for the execution of the corresponding queries.</p>
        <p>Programming languages offer different solutions to access the database from inside your application. There are two approaches to accessing SQL:</p>
        <dl class="enumerationList">
          <dt>
            <em>Embedded SQL</em> A preprocessor submits the SQL statements to the DBMS. SQL-related errors will be caught at compile time, before execution takes place.
          </dt>
          <dt>
            <em>Dynamic SQL</em> The SQL queries are written and stored in the programming language, then submitted to the DBMS via a database driver. The result returned by the DBMS are then stored into variables of the programming language.
          </dt>
        </dl>

        <p>One example of how to connect to a database is by using PDO (PHP Data Objects). It offers:</p>
        <dl class="enumerationList">
          <dt>
            <em>Coding consistency</em> Single uniform interface no matter which database is being accessed
          </dt>
          <dt>
            <em>Flexibility</em> Database drivers are loaded runtime
          </dt>
          <dt>
            <em>Object-Oriented Features</em>
          </dt>
          <dt>
            <em>Performance</em>
          </dt>
        </dl>

        <p>In the images bellow you can see an example of how you can connect to a database by using PDO</p>

        <div class="photos-container">
          <img src="../../assets/PDOConnect.png" alt="">
          <img src="../../assets/PDOAdd.png" alt="">
        </div>

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

<style lang="scss">
.topicText {
  p, dt {
    line-height: 2em;
    font-size: 16px;
    font-weight: 300;
  }

  h3 {
    font-size: 20px;
  }

  .enumerationList {
    margin-left: 3vw;
  }
}
.photos-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 300px;
    width: auto;
    margin-bottom: 3vh;
  }
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
          videoLink: "https://www.youtube.com/embed/PYB0OJefm2M",
          tutorialName: "Web front-end Course",
          tutorialText: '',
        },
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
