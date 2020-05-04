<template>
  <div class="rational-database-page" v-if="topic">
    <!-- TOPIC: RelationalDB -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
      <div>
        <p>In order to understand what a relational database is, it is important to understand two other principals: databases and data models.</p>
        <h3>What is a database?</h3>
        <p>
          According to C.J. Date (An introduction to Database Systems, 8th ed., 2004):
          “A database is a collection of persistent data that is used by the application systems of some given enterprise”.
        </p>
        <h3>What is a data model?</h3>
        <p>A data model is an abstract model which organizes data and defines the way they interact with each other.
          Based on the data model databases can have the following types: hierarchical, network, relational and object-oriented.
        </p>
        <h3>The Relational Model</h3>
        <p>A relations is a bidimensional structure that represent a group of data objects. Each data object, constituting a row is a tuple, and attributes go by the name of attribute.Within the database scope, relations are named tables, tuples rows or records and attributes keep the same name. Within a relation (a table) every row must be unique and every row must have the same set of attributes even if there is no value for some of them.</p>
        <img src="" alt="">
        <h3>Attributes data types</h3>
        <p>
          The value inserted in a tables must follow the attribute data type. Few common data types are:
          Integer numbers
          Decimal numbers
          Character strings
          Dates and times
          Boolean
          NULL

          Custom types can also be set up by defining enums. An example would be Months which will have predefined values ‘January’, ‘February’, etc.
        </p>
        <h3>Primary Keys</h3>
        <p>In order to identify a row inside a table it needs at least one unique attribute or a group of attributes that make up a unique value. For each table there can be different candidate keys such as: customerId or  socialSecurityNumber. But only one of them can be chose to identify the row and become the primary key for that table. Even though one table can only have one primary key, it can be composed out of more attributes and be called compound key.</p>
        <h3>Foreign Keys</h3>
        <p>Foreign keys help you find data related to a row in a table B inside table A. To do so th primary key from table B has to be the foreign key in table A. Opposite to the primary key one table can have multiple foreign keys linking to different tables.</p>
        <h3>Field Constraints</h3>
        <p>
          When creating a relational database these field constraints can be set:
          UNIQUE - does not allow repeated values - applies to all the primary keys
          NOT NULL - it will not allow a field to contain null values.
          DEFAULT - it assigns a default value to the field in case no value is defined.
        </p>
        <h3>Indexes</h3>
        <p>
          Indexes are a way of searching for data in a faster and orderly way. Every relational table has at least one index, which sorts the table content based on its primary key. Further indexes can be created based on the following criteria:
          Fields that will define the order of most common queries
          Fields accessed often, since their values will be sorted in the index.
          Foreign keys, as queries to related tables will be sped up.
          It is also important to keep in mind that setting up to many indexes may slow down insert, update and delete operations.
        </p>
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
</style>


<script>
import ForumChatBanner from "@/components/layout/ForumChatBanner";
import TopicPage from "../../components/topics/TopicPage";
import router from "../../router";
import { mapGetters } from "vuex";
import TakeAQuizSection from "../../components/layout/TakeAQuizSection";
import VideoTutorials from "../../components/layout/VideoTutorials";

export default {
  name: "RelationalDB",
  components: { TopicPage, ForumChatBanner, VideoTutorials, TakeAQuizSection },
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
