<template>
  <div class="welcome">
    <section>
      <h1>
        Welcome <strong>{{userName}}</strong>
      </h1>

      <!-- COURSES/TOPICS SECTION -->
      <div class="allCourses">
        <TopicBox
          v-for="course in getCourses"
          :course="course"
          :key="course.courseId"
          @click.native="goToTopic(course.courseLink)">
        </TopicBox>
      </div>

      <!-- FORUM SECTION -->
      <ForumChatBanner></ForumChatBanner>
    </section>
  </div>
</template>

<style lang="scss">
section {
  margin: 0 13vw;
}

h1 {
  font-weight: 100;
  text-align: left;
}

// COURSES/TOPICS
.allCourses {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>

<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicBox from "../components/topics/TopicBox";
import {mapGetters} from "vuex";
import router from "../router";

export default {
  name: "Welcome",
  components: {TopicBox, ForumChatBanner },
  data: function() {
    return {
      userName: "Amanda",
    };
  },
  computed: {
    ...mapGetters([
       'getCourses'
    ]),
  },
  methods: {
    goToTopic: function (link) {
      router.push({name: link});
    }
  }
};
</script>