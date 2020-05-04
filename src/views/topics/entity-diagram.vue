<template>
  <div class="entity-diagram-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: EntityDiagram -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
      <div>
        <p>An Entity–relationship model (ER model) describes the structure of a database with the help of a diagram, which is known as an Entity Relationship Diagram (ER Diagram). An ER model is a design or blueprint of a database that can later be implemented as a database. In terms of DBMS, an entity is a table or attribute of a table in a database, so by showing relationships among tables and their attributes, the ER diagram shows the complete logical structure of a database.</p>
        <p>Any object, such as entities, attributes of an entity, sets of relationship, and other attributes of relationship, can be characterised with the help of the ER diagram.</p>
        <p>ER modeling is a top-down structure to database design that begins with identifying the important data called entities and relationships in combination with the data that must be characterised in the model. Then database model designers can add more details such as the information they want to hold about the entities and relationships, which are the attributes and any constraints on the entities, relationships, and attributes. ER modeling is an important technique for any database designer to master and forms the basis of the methodology.</p>
        <p>Entities: An entity is an object or component of data. An entity is represented as a rectangle in an ER diagram. An entity that cannot be uniquely identified by its own attributes and relies on the relationship with another entity, this is called a weak entity, and is represented by a double rectangle.</p>
        <p>Attributes: An attribute describes the property of an entity. An attribute is represented as Oval in an ER diagram. There are four types of attributes: Key attribute, Composite attribute, multivalued attribute & Derived attribute.</p>
        <p>Relationships: A relationship is represented by diamond shape in the ER diagram, it shows the relationship among entities. There are four types of relationships:</p>
        <p>1. One to one: When a single instance of an entity is associated with a single instance of another entity then it is called one to one relationship. For example, a person has only one passport and a passport is given to one person.</p>
        <p>2. One to many: When a single instance of an entity is associated with more than one instance of another entity then it is called one to many relationship. For example – a customer can place many orders but an order cannot be placed by many customers.</p>
        <p>3. Many to one: When more than one instance of an entity is associated with a single instance of another entity then it is called many to one relationship. For example – many students can study in a single college but a student cannot study in many colleges at the same time.</p>
        <p>4. Many to Many: When more than one instance of an entity is associated with more than one instance of another entity then it is called many to many relationship. For example, a student can be assigned to many projects and a project can be assigned to many students.</p>
        <p>Total Participation of an Entity set: A Total participation of an entity set represents that each entity in the entity set must have at least one relationship in a relationship set.</p>
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
import {mapGetters} from "vuex";
import router from "../../router";
import VideoTutorials from "../../components/layout/VideoTutorials";
import TakeAQuizSection from "../../components/layout/TakeAQuizSection";
export default {
  name: "entity-diagram-page",
  components: {TopicPage, ForumChatBanner, VideoTutorials, TakeAQuizSection },
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
