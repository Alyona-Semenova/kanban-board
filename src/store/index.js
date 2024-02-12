import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      // status 
      // 1 - на согласовании
      // 2 - новые
      // 3 - в процессе
      // 4 - готово
      // 5 - доработать
      {
        id: 1,
        title: "Задача 1",
        status: 1,
      },

      {
        id: 2,
        title: "Задача 2",
        status: 2,

      },
      {
        id: 3,
        title: "Задача 3",
        status: 3,

      },
      {
        id: 4,
        title: "Задача 4",
        status: 4,

      },

      {
        id: 5,
        title: "Задача 5",
        status: 1,

      },

      {
        id: 6,
        title: "Задача 6",
        status: 1,

      },



    ],
  },
  getters: {
    tasksByStatus: (state) => (status) => {
      return state.tasks.filter(task => task.status === status);
    },
    tasksListLength: (state) => {
      return state.tasks.length;
    }
  },
  mutations: {
    /**
     * Мутация на добавление новой задачи 
     * @param {} state 
     */
    ADD_NEW_CARD(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    /**
     * Добавление новой задачи
     */
    addCard({ commit }, payload) {
      commit("ADD_NEW_CARD", payload);
    },
  },
  modules: {
  }
})
