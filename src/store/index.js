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
        ],
      },
    ],
    courses: [
      {
        courseId: 1,
        courseTitle: "SQL",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "pink.png",
        courseLink: "learn-sql"
      },
      {
        courseId: 2,
        courseTitle: "Rational Database",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "purple.png",
        courseLink: "learn-sql"
      },
      {
        courseId: 3,
        courseTitle: "Database Normalisation",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "dark-blue.png",
        courseLink: "learn-sql"
      },
      {
        courseId: 4,
        courseTitle: "Entity Diagram",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "skin-color.png",
        courseLink: "learn-sql"
      },
      {
        courseId: 5,
        courseTitle: "Web Front End",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "salmon.png",
        courseLink: "learn-sql"
      },
      {
        courseId: 6,
        courseTitle: "Web Front End",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "yellow.png",
        courseLink: "learn-sql"
      }
    ],
  },
  mutations,
  actions,
  getters,
});
