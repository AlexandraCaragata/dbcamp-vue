<template>
  <div class="welcome">
    {{this.apiMessage}}
    <section>
      <h1>
        Welcome
        <strong>{{userName}}</strong>
      </h1>
      <!-- COURSES/TOPICS SECTION -->
      <div class="allCourses">
        <div
          class="course"
          v-for="course in courses"
          v-bind:key="course.courseId"
          v-on:click="location.href=url(`http://localhost:8080/${course.courseLink}`)"
        >
          <img :src="require(`../assets/icons/${course.courseIcon}`)" alt="icon" />
          <h3>Course</h3>
          <h2>{{course.courseTitle}}</h2>
          <p>{{course.courseTxt}}</p>
        </div>
      </div>

      <!-- FORUM SECTION -->
      <ForumChatBanner></ForumChatBanner>
    </section>
  </div>
</template>

<style lang="scss">
section {
  margin: 0px 13vw;
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
.course {
  border: 2px solid #d3cecb;
  padding: 10px;
  margin: 25px 50px 25px 0px;
  border-radius: 5px;
  cursor: pointer;
}
.course > p {
  font-weight: 100;
}
.course > h2 {
  font-weight: 400;
}
.course > h3 {
  font-weight: 600;
  font-size: 14px;
}

.course > h2,
h3 {
  margin: 0;
  text-align: left;
}
.course > img {
  position: absolute;
  margin-top: -3.5vw;
  margin-left: 16vw;
}
</style>

<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
export default {
  name: "Welcome",
  components: { ForumChatBanner },
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