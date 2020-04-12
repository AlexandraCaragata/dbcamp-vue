import Vue from 'vue';
import Vuex from 'vuex';
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    quizzes: [
      {
        title: 'SQL',
        questions: [
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: true,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
          {
            title: 'something?',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
            correctAnswer: 'answer1',
            answered: false,
          },
        ]
      },
    ],
  },
  mutations,
  actions,
  getters,
});
