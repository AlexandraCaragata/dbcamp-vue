<template>
  <div class="welcome">
    <div class="wrapper">
      <h1>
        Welcome <strong>{{getUsername}}</strong>
      </h1>

      <!-- COURSES/TOPICS SECTION -->
      <div class="allCourses" v-if="haveTopicsLoaded && getTopics">
        <TopicBox
          v-for="topic in getTopics"
          :topic="topic"
          :key="topic.id"
          @click.native="goToTopic(topic.link)">
        </TopicBox>
      </div>

      <!-- FORUM SECTION -->
      <ForumChatBanner></ForumChatBanner>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  margin: 0 5vw;
}

h1 {
  font-weight: 100;
  text-align: left;
}
@media screen and (min-width: 450px) {
  .wrapper {
  margin: 0 7vw;
}
.allCourses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
}

@media screen and (min-width: 1100px) {
.wrapper {
  margin: 0 13vw;
}
.allCourses {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
}
}
</style>

<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicBox from "../components/topics/TopicBox";
import { mapActions, mapGetters } from "vuex";
import router from "../router";

export default {
  name: "Welcome",
  components: { TopicBox, ForumChatBanner },
  computed: {
    ...mapGetters([
      'getTopics',
      'getUser',
      'haveTopicsLoaded'
    ]),
    getUsername() {
      return this.getUser.username;
    }
  },
  async mounted() {
    if (!this.getUser) {
      await router.push({ name: 'Home' });
    }
  },
  methods: {
    goToTopic: function (link) {
      router.push({ name: link });
    }
  }
};
</script>