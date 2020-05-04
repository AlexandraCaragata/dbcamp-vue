<template>
  <div class="sql-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: SQL -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
      <div>
        <h3>Introduction to SQL</h3>
        <p>
          SQL, Structured Query Language, is a programming language designed to manage data stored in relational databases. SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size. The CRUD operations as we know it for the php, Java etc. is Create, Read, Update and Delete. The CRUD in SQL is a bit different, same concept, but different names, here is Create, Insert, Select, Update and Delete.
        </p>
        <h3>Statements</h3>
        <p>The code below is a SQL statement. A statement is text that the database recognizes as a valid command. Statements always end in a semicolon ;.</p>
        <p>CREATE TABLE table_name (
          column_1 data_type,
          column_2 data_type,
          column_3 data_type
          );
        </p>

        <h3>Create</h3>
        <p>CREATE statements allow us to create a new table in the database. You can use the CREATE statement anytime you want to create a new table from scratch. The statement below creates a new table named db-camp.</p>
        <p>CREATE TABLE  db-camp (
          id INTEGER,
          name TEXT,
          age INTEGER
          );
        </p>
        <h3>Definition:</h3>
        <p>CREATE TABLE is a clause that tells SQL you want to create a new table.</p>
        <p>db-camp is the name of the table.</p>
        <p>(id INTEGER, name TEXT, age INTEGER) is a list of parameters defining each column, or attribute in the table and its data type.</p>

        <h3>Insert</h3>
        <p>The INSERT statement inserts a new row into a table. You can use the INSERT statement when you want to add new records. The statement below enters a record for SQL  into the db-camp table.</p>
        <p>INSERT INTO db-camp (id, name, number)
        VALUES (1, ‘SQL-statements’, 12);</p>
        <h3>Definition</h3>
        <p>INSERT INTO is a clause that adds the specified row or rows.</p>
        <p>db-camp is the name of the table the row is added to.</p>
        <p>(id, name, number) is a parameter identifying the columns that data will be inserted into.</p>
        <p>VALUES is a clause that indicates the data being inserted.</p>
        <p>(1, ‘SQL-statements’, 12) is a parameter identifying the values being inserted.</p>

        <h3>Select</h3>
        <p>SELECT statements are used to fetch data from a database. In the statement below, SELECT returns all data in the name column of the db-camp table.</p>
        <p>SELECT name FROM db-camp;</p>
        <h3>Definition</h3>
        <p>SELECT is a clause that indicates that the statement is a query. You will use SELECT every time you query data from a database.
          name specifies the column to query data from.
          FROM db-camp specifies the name of the table to query data from. In this statement, data is queried from the db-camp table.
        </p>
        <p>You can also query data from all columns in a table with SELECT.</p>
        <p>SELECT * FROM db-camp;</p>
        <p>* is a special wildcard character that we have been using. It allows you to select every column in a table without having to name each one individually. Here, the result set contains every column in the db-camp table.</p>
        <p>SELECT statements always return a new table called the result set.</p>

        <h3>Update</h3>
        <p>The UPDATE statement edits a row in a table. You can use the UPDATE statement when you want to change existing records. The statement below updates the record with an id value of 2 to have the SQL-statement Update.</p>
        <p>UPDATE db-camp <br>
          SET SQL-statement = 'Update’ <br>
          WHERE id = 2; <br>
        </p>
        <h3>Definition</h3>
        <p>UPDATE is a clause that edits a row in the table. <br>
          db-camp is the name of the table. <br>
          SET is a clause that indicates the column to edit. <br>
          SQL-statement is the name of the column that is going to be updated <br>
          Update is the new value that is going to be inserted into the SQL-statement column. <br>
          WHERE is a clause that indicates which row(s) to update with the new column value. Here the row with a 2 in the id column is the row that will have the SQL-statement updated to Update.<br>
        </p>

        <h3>Delete</h3>
        <p>The DELETE FROM statement deletes one or more rows from a table. You can use the statement when you want to delete existing records. The statement below deletes all records in the db-camp table with no SQL-statement:</p>
        <p>DELETE FROM db-camp <br>
          WHERE SQL-statement IS NULL; <br>
        </p>
        <h3>Definition</h3>
        <p>
          DELETE FROM is a clause that lets you delete rows from a table. <br>
          db-camp is the name of the table we want to delete rows from. <br>
          WHERE is a clause that lets you select which rows you want to delete. Here we want to delete all of the rows where the SQL-statement column IS NULL. <br>
          IS NULL is a condition in SQL that returns true when the value is NULL and false otherwise. <br>
        </p>

        <p>The structure of SQL statements vary. The number of lines used does not matter. A statement can be written all on one line, or split up across multiple lines if it makes it easier to read. </p>
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
  name: "SQL-page",
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
