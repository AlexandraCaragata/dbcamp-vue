<template>
  <div class="sql-page" v-if="haveTopicsLoaded">
    <!-- TOPIC: SQL -->
    <TopicPage
      :topicName="topic.name"
      :topicIcon="topic.iconName"
    >
      <div class="topicText">
        <h3>Introduction to SQL</h3>
        <p>
          SQL, Structured Query Language, is a programming language designed to manage data stored in relational databases. SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size. The CRUD operations as we know it for the php, Java etc. is Create, Read, Update and Delete. The CRUD in SQL is a bit different, same concept, but different names, here is Create, Insert, Select, Update and Delete.
        </p>

        <h3>Statements</h3>
        <p>The code below is a SQL statement. A statement is text that the database recognizes as a valid command. Statements always end in a semicolon ;.</p>
        <div class="codeBlock">
          CREATE TABLE table_name ( <br>
          column_1 data_type, <br>
          column_2 data_type, <br>
          column_3 data_type <br>
          );
        </div>

        <h3>Create</h3>
        <p>CREATE statements allow us to create a new table in the database. You can use the CREATE statement anytime you want to create a new table from scratch. The statement below creates a new table named db-camp.</p>
        <div class="codeBlock">
          CREATE TABLE  db-camp ( <br>
          id INTEGER, <br>
          name TEXT, <br>
          age INTEGER <br>
          );
        </div>
        <h3>Definition:</h3>
        <p><em>CREATE TABLE</em> is a clause that tells SQL you want to create a new table.</p>
        <p><em>db-camp</em> is the name of the table.</p>
        <p><em>(id INTEGER, name TEXT, age INTEGER)</em> is a list of parameters defining each column, or attribute in the table and its data type.</p>

        <h3>Insert</h3>
        <p>The INSERT statement inserts a new row into a table. You can use the INSERT statement when you want to add new records. The statement below enters a record for SQL  into the db-camp table.</p>
        <div  class="codeBlock">
          INSERT INTO db-camp (id, name, number) <br>
          VALUES (1, ‘SQL-statements’, 12);
        </div>

        <h3>Definition</h3>
        <p><em>INSERT INTO</em> is a clause that adds the specified row or rows.</p>
        <p><em>db-camp</em> is the name of the table the row is added to.</p>
        <p><em>(id, name, number)</em> is a parameter identifying the columns that data will be inserted into.</p>
        <p><em>VALUES</em> is a clause that indicates the data being inserted.</p>
        <p><em>(1, ‘SQL-statements’, 12)</em> is a parameter identifying the values being inserted.</p>

        <h3>Select</h3>
        <p>SELECT statements are used to fetch data from a database. In the statement below, SELECT returns all data in the name column of the db-camp table.</p>
        <div class="codeBlock">SELECT name FROM db-camp;</div>

        <h3>Definition</h3>
        <p><em>SELECT</em> is a clause that indicates that the statement is a query. You will use SELECT every time you query data from a database.
        <p><em>name</em> specifies the column to query data from.</p>
        <p><em>FROM db-camp</em> specifies the name of the table to query data from. In this statement, data is queried from the db-camp table.</p>
        <p>You can also query data from all columns in a table with SELECT.</p>
        <div  class="codeBlock">SELECT * FROM db-camp;</div>

        <p><em>*</em> is a special wildcard character that we have been using. It allows you to select every column in a table without having to name each one individually. Here, the result set contains every column in the db-camp table.</p>
        <p><em>SELECT</em> statements always return a new table called the result set.</p>

        <h3>Update</h3>
        <p>The UPDATE statement edits a row in a table. You can use the UPDATE statement when you want to change existing records. The statement below updates the record with an id value of 2 to have the SQL-statement Update.</p>

        <div  class="codeBlock">
          UPDATE db-camp <br>
          SET SQL-statement = 'Update’ <br>
          WHERE id = 2; <br>
        </div>

        <h3>Definition</h3>
        <p><em>UPDATE</em> is a clause that edits a row in the table. <br>
          <em>db-camp</em> is the name of the table. <br>
          <em>SET</em> is a clause that indicates the column to edit. <br>
          <em>SQL-statement</em> is the name of the column that is going to be updated <br>
          <em>Update</em> is the new value that is going to be inserted into the SQL-statement column. <br>
          <em>WHERE</em> is a clause that indicates which row(s) to update with the new column value. Here the row with a 2 in the id column is the row that will have the SQL-statement updated to Update.<br>
        </p>

        <h3>Delete</h3>
        <p>The DELETE FROM statement deletes one or more rows from a table. You can use the statement when you want to delete existing records. The statement below deletes all records in the db-camp table with no SQL-statement:</p>
        <div class="codeBlock">
          DELETE FROM db-camp <br>
          WHERE SQL-statement IS NULL; <br>
        </div>

        <h3>Definition</h3>
        <p>
          <em>DELETE FROM</em> is a clause that lets you delete rows from a table. <br>
          <em>db-camp</em> is the name of the table we want to delete rows from. <br>
          <em>WHERE</em> is a clause that lets you select which rows you want to delete. Here we want to delete all of the rows where the SQL-statement column IS NULL. <br>
          <em>IS NULL</em> is a condition in SQL that returns true when the value is NULL and false otherwise. <br>
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

  .codeBlock {
    background-color: #d3cecb;
    margin: 0 auto;
    padding: 1vw;
    width: fit-content;
  }
}
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
