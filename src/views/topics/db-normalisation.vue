<template>
  <div class="db-norm-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: DB Normalization -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
     <div class="topicText">
      <p>Normalization is a formal technique for analysing relations based on their primary key and functional dependencies (Codd, 1972b). The technique involves a series of rules that can be used to divide larger tables into smaller tables and link them together using relationships. The purpose of Normalization is to eliminate unnecessary or useless data and ensure data is stored logically.</p>
      <h3>The normalization rules are divided into the following normal forms:</h3>
       <dl class="enumerationList">
         <dt>1. First Normal Form (1 NF). Here each column is unique.</dt>
         <dt>2. Second Normal Form (2 NF).
           The entity should be considered already in 1NF, and all attributes within the entity should depend alone on the unique identifier of the entity.</dt>
         <dt>3. Third Normal Form (3 NF).
           In this case, the entity should be considered already in 2NF, and no column entry should be dependent on any other value other than the key for the table. If such an entity exists, move it outside into a new table.</dt>
         <dt>
           4. 	BCNF
           Same rules as in 3NF plus all tables in the database should be only one primary key.
         </dt>
       </dl>

      <p>
       With exception of 1NF, all these normal forms are based on functional dependencies among the attributes of a relation (Maier, 1983).
        BCNF is a stronger definition of 3 NF. You can find higher normal forms that goes beyond BCNF, but in this course we will only describe the first three normal forms.
      </p>

      <h3>Example:</h3>
      <p>Here is a table of students at KEA studying Multimedia design. The rows of this table includes the student ID, the name of the student, the study program, the teacher who teaches this program and the classroom where the class will take place.
        Every time KEA gets a new student for their Multimedia Design program, three rows are repeated:
        study_program, teacher and classroom.
      </p>
      <img class="topic-image" src="../../assets/normalization_example_table.png">
      <p>
       Unnecessary data repetition increases the size of the database and leads to more issues like problems with updating the database without facing data loss.
       Duplication is reduced by splitting the information up into smaller tables, each with a specific focus. In this case, we’ll split the table into one table that contains the first two rows and call it ”Students”, and another table for the three last rows and call it for example ”Study Programs”. To connect the two tables, we need to understand primary keys and foreign keys.

       A primary key is unique and identifies are record in a Table. A primary key cannot be null. A foreign key references a primary key, and therefore we can use foreign keys to connect the two tables.

       See the videos for more information about keys and normal forms.
      </p>
      <h3>Remember to take the quiz afterwards!</h3>
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
img.topic-image {
  width: 600px;
  height: auto;
}

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
</style>


<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicPage from "../../components/topics/TopicPage";
import TakeAQuizSection from "../../components/layout/TakeAQuizSection";
import {mapGetters} from "vuex";
import VideoTutorials from "../../components/layout/VideoTutorials";
export default {
  name: "db-normalisation-page",
  components: {VideoTutorials, TakeAQuizSection, TopicPage, ForumChatBanner },
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
};
</script>
