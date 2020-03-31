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
        <div class="course" v-for="course in courses" v-bind:key="course.courseId">
          <img :src="require(`../assets/icons/${course.courseIcon}`)" alt="icon" />
          <h3>Course</h3>
          <h2>{{course.courseTitle}}</h2>
          <p>{{course.courseTxt}}</p>
        </div>
      </div>

      <!-- FORUM SECTION -->
      <div class="forum-container">
        <img src="../assets/icons/chat-icon-hi.png" style="
    margin-left: 70px" alt="icon" />
        <div class="forum-txt">
          <h1>Do you need help?</h1>
          <h2>Chat with the experts</h2>
          <button class="btn-goToForum" v-on:click="goToForum">Go to the forum</button>
        </div>
        <img src="../assets/icons/chat-icon-what.png" alt="icon" />
      </div>
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
// FORUM
.forum-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 250px;
}
.forum-txt {
  text-align: center;
  margin: auto;
}
.forum-txt > h1 {
  font-weight: bold;
  margin: 0;
  text-align: center;
}
.forum-txt > h2 {
  font-weight: 400;
  margin: 0;
}
.btn-goToForum {
  background-color: #354865;
  width: 180px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: #354865;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px 0;
}
.forum-container > img {
  height: 100%;
  align-content: right;
}
</style>

<script>
export default {
  name: "Welcome",
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
          courseIcon: "pink.png"
        },
        {
          courseId: 2,
          courseTitle: "Rational Database",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "purple.png"
        },
        {
          courseId: 3,
          courseTitle: "Database Normalisation",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "dark-blue.png"
        },
        {
          courseId: 4,
          courseTitle: "Entity Diagram",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "skin-color.png"
        },
        {
          courseId: 5,
          courseTitle: "Web Front End",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "salmon.png"
        },
        {
          courseId: 6,
          courseTitle: "Web Front End",
          courseTxt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
          courseIcon: "yellow.png"
        }
      ]
    };
  },
  methods: {
    goToForum: function() {
      location.href = "/forum";
    }
  }
};
</script>