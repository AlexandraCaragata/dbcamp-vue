<template>
  <div class="welcome">
    <section>
      <h1>
        Welcome <strong>{{userName}}</strong>
      </h1>

      <!-- COURSES/TOPICS SECTION -->
      <div class="allCourses">
        <TopicBox
          v-for="course in courses"
          :course="course"
          :key="course.courseId"
          @click="location.href = url(`http://localhost:8080/${course.courseLink}`)">
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
export default {
  name: "Welcome",
  components: {TopicBox, ForumChatBanner },
  data: function() {
    return {
      apiMessage: "",
      userName: "Amanda",
      courses: [
        {
          courseId: 1,
          courseTitle: "SQL",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "pink.png",
          courseLink: "/learn-sql"
        },
        {
          courseId: 2,
          courseTitle: "Rational Database",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "purple.png",
          courseLink: "/learn-sql"
        },
        {
          courseId: 3,
          courseTitle: "Database Normalisation",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "dark-blue.png",
          courseLink: "/learn-sql"
        },
        {
          courseId: 4,
          courseTitle: "Entity Diagram",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "skin-color.png",
          courseLink: "/learn-sql"
        },
        {
          courseId: 5,
          courseTitle: "Web Front End",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "salmon.png",
          courseLink: "/learn-sql"
        },
        {
          courseId: 6,
          courseTitle: "Web Front End",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "yellow.png",
          courseLink: "/learn-sql"
        }
      ]
    };
  }
};
</script>