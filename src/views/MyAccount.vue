<template>
  <section class="wrapper">
    <h1>
      Welcome
      <strong>{{getUsername}}</strong>
    </h1>

    <!-- COURSES/TOPICS SECTION -->
    <div class="takenCourses" v-if="haveDiplomasLoaded && getDiplomas">
      <TopicBox v-for="diploma in getDiplomas" :topic="diploma" :key="diploma.id"></TopicBox>
    </div>

    <!-- FORUM SECTION -->
    <ForumChatBanner></ForumChatBanner>
  </section>
</template>

<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicBox from "../components/topics/TopicBox";
import { mapActions, mapGetters } from "vuex";
import router from "../router";

export default {
  name: "MyAccount.vue",
  components: { TopicBox, ForumChatBanner },
  computed: {
    ...mapGetters(["getUser", "getDiplomas", "haveDiplomasLoaded"]),
    getUsername() {
      return this.getUser.username;
    }
  },
  methods: {
    ...mapActions(["fetchDiplomas"])
  },
  async mounted() {
    if (!this.getUser) {
      await router.push({ name: "Home" });
      return;
    }

    await this.fetchDiplomas(this.getUser.id);
  }
};
</script>

<style lang="scss">
.wrapper {
  margin: 0 5vw;
  min-height: 600px;
}

h1 {
  font-weight: 100;
  text-align: left;
}
@media screen and (min-width: 450px) {
  .wrapper {
    margin: 0 7vw;
  }
  .takenCourses {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
}

@media screen and (min-width: 1100px) {
  .wrapper {
    margin: 0 13vw;
    min-height: 800px;
  }
  .takenCourses {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
  }
}
</style>