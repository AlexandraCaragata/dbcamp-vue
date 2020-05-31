<template>
  <div class="rational-database-page" v-if="topic">
    <!-- TOPIC: RelationalDB -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
      <div class="topicText">
        <p>In order to understand what a relational database is, it is important to understand two other principals: <em>databases</em> and <em>data models</em>.</p>
        <h3>What is a database?</h3>
        <p>
           According to C.J. Date (An introduction to Database Systems, 8th ed., 2004): <br>
          “A database is a collection of persistent data that is used by the application systems of some given enterprise”.
        </p>

        <h3>What is a data model?</h3>
        <p>A data model is an abstract model which organizes data and defines the way they interact with each other.
          Based on the data model databases can have the following types:
          <em>hierarchical</em>, <em>network</em>, <em>relational</em> and <em>object-oriented</em>.
        </p>

        <h3>The Relational Model</h3>
        <p>A relations is a bi dimensional structure that represent a group of data objects. Each data object, constituting a row is a tuple, and attributes go by the name of attribute.
           Within the database scope, relations are named tables, tuples rows or records and attributes keep the same name. Within a relation (a table) every row must be unique and every row must have the same set of attributes even if there is no value for some of them.</p>
        <img src="" alt="">

        <h3>Attributes data types</h3>
        <p>The value inserted in a tables must follow the attribute data type. Few common data types are: </p>
        <dl class="enumerationList">
          <dt>Integer numbers</dt>
          <dt>Decimal numbers</dt>
          <dt>Character strings</dt>
          <dt>Dates and times</dt>
          <dt>Boolean</dt>
          <dt>NULL</dt>
        </dl>
        <p>Custom types can also be set up by defining enums. An example would be Months which will have predefined values ‘January’, ‘February’, etc.</p>

        <h3>Primary Keys</h3>
        <p>
          In order to identify a row inside a table it needs at least one unique attribute or a group of attributes that make up a unique value.
          For each table there can be different candidate keys such as: <em>customerId</em> or  <em>socialSecurityNumber</em>.
          But only one of them can be chose to identify the row and become the primary key for that table.
          Even though one table can only have one primary key, it can be composed out of more attributes and be called compound key.
        </p>

        <h3>Foreign Keys</h3>
        <p>
          Foreign keys help you find data related to a row in a table B inside table A.
          To do so the primary key from table B has to be the foreign key in table A.
          Opposite to the primary key one table can have multiple foreign keys linking to different tables.
        </p>

        <h3>Field Constraints</h3>
        <p>
          When creating a relational database these field constraints can be set:
        </p>
        <dl class="enumerationList">
          <dt>UNIQUE - does not allow repeated values - applies to all the primary keys</dt>
          <dt>NOT NULL - it will not allow a field to contain null values.</dt>
          <dt>DEFAULT - it assigns a default value to the field in case no value is defined.</dt>
        </dl>

        <h3>Indexes</h3>
        <p>Indexes are a way of searching for data in a faster and orderly way. Every relational table has at least one index, which sorts the table content based on its primary key. Further indexes can be created based on the following criteria:</p>
        <dl class="enumerationList">
          <dt>Fields that will define the order of most common queries</dt>
          <dt>Fields accessed often, since their values will be sorted in the index.</dt>
          <dt>Foreign keys, as queries to related tables will be sped up.</dt>
          <dt>It is also important to keep in mind that setting up to many indexes may slow down insert, update and delete operations.</dt>
        </dl>
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
