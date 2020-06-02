<template>
  <div id="quiz" v-if="quiz">
    <h1 id="heading">{{this.quiz.title}}</h1>
    <QuestionContainer
      :question="this.question"
      :position="this.questionNumber"
      :total="this.quiz.questions.length"
      @markQuestionAnswered="markQuestionAnswered"
      @registerScore="registerScore"
    ></QuestionContainer>
  </div>
</template>

<style lang="scss">
#quiz {
  min-height: 600px;
}
#heading {
  text-align: center;
}
footer {
  position: absolute;
}
</style>
<script>
import QuestionContainer from "../components/quizzes/QuestionContainer";
import router from "../router";
import formDataGenerator from "../services/formDataGenerator";
import { mapGetters } from "vuex";
export default {
  name: "Quiz",
  data: function() {
    return {
      quiz: null,
      questionNumber: 1
    };
  },
  components: { QuestionContainer },
  computed: {
    question() {
      return this.quiz.questions[this.questionNumber - 1];
    },
    ...mapGetters(["getUser"])
  },
  mounted() {
    if (!this.getUser) {
      router.push({ name: "Home" });
      return;
    }

    fetch(
      `${process.env.VUE_APP_API_URL}/databaseConnections/quizzes/get-quiz.php?quizId=${this.$route.params.quizId}`
    ).then(async response => {
      const body = await response.json();

      if (body.success) {
        this.quiz = body.quiz;
      }
    });
  },
  methods: {
    markQuestionAnswered: function() {
      this.questionNumber += 1;
    },
    registerScore: async function(score) {
      await fetch(
        `${process.env.VUE_APP_API_URL}/databaseConnections/quizzes/save-answered-quiz.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            quizId: this.quiz.id,
            quizScore: score * 10,
            userId: this.getUser.id
          })
        }
      );

      await router.push({ name: "MyAccount" });
    }
  }
};
</script>
