import Vue from 'vue';
import Vuex from 'vuex';
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    courses: [
      {
        courseId: 1,
        courseTitle: "Relational Databases",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "pink.png",
        courseLink: "relationalDatabase",
        quizId: 1,
      },
      {
        courseId: 2,
        courseTitle: "Database normalization",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "purple.png",
        courseLink: "dbNormalisation"
      },
      {
        courseId: 3,
        courseTitle: "Entity relationship diagram",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "dark-blue.png",
        courseLink: "entityDiagram"
      },
      {
        courseId: 4,
        courseTitle: "SQL",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "skin-color.png",
        courseLink: "sql"
      },
      {
        courseId: 5,
        courseTitle: "Install a relational database",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "salmon.png",
        courseLink: "installRelationalDatabase"
      },
      {
        courseId: 6,
        courseTitle: "Web Front End",
        courseTxt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
        courseIcon: "yellow.png",
        courseLink: "webFrontEnd"
      }
    ],
  },
  mutations,
  actions,
  getters,
});
