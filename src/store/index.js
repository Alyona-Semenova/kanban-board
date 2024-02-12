import { uniqueId } from "lodash";

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPlugins from "../plugins/vuexPlugin";
import { MESSAGE_LIVE_TIME } from "@/common/constants.js";

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

    notifications: [],
  },
  getters: {
    tasksByStatus: (state) => (status) => {
      return state.tasks.filter(task => task.status === status);
    },
    tasksListLength: (state) => {
      return state.tasks[state.tasks.length - 1].id
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

    /**
     * Удаление задачи
     * @param {} state 
     */
    DELETE_CARD(state, taskId) {
      const index = state.tasks.findIndex(obj => obj.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },

    /**
     * Редактирование карточки
     * @param {*} state 
     * @param {*} task
     */
    EDIT_CARD(state, taskForReplacement) {
      state.tasks.forEach(task => {
        if (task.id == taskForReplacement.id) {
          task.status = taskForReplacement.status;
        }
      });

    },

    /**
     * Удаление уведомления
     * @param {*} state 
     * @param {*} id 
     */
    DELETE_NOTIFICATION(state, id) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== id
      );
    },

    /**
     * Добавить уведомление
     * @param {*} state 
     * @param {*} notification 
     */
    ADD_NOTIFICATION(state, notification) {
      state.notifications = [...state.notifications, notification];
    },
  },
  actions: {
    /**
     * Добавление новой задачи
     */
    addCard({ commit }, payload) {
      commit("ADD_NEW_CARD", payload);
    },

    /**
    * Удаление задачи
    */
    deleteCard({ commit }, task) {
      commit("DELETE_CARD", task.id);
      this.$notifier.success("Задача удалена", task.title);
    },


    /**
    * Редактирование карточки
    */
    editCard({ commit }, payload) {
      commit("EDIT_CARD", payload);
    },

    async createNotification({ commit }, { ...notification }) {
      const uniqueNotification = {
        ...notification,
        id: uniqueId(),
      };
      commit("ADD_NOTIFICATION", uniqueNotification);
      setTimeout(
        () => commit("DELETE_NOTIFICATION", uniqueNotification.id),
        MESSAGE_LIVE_TIME
      );
    },
  },
  modules: {
  },
  plugins: [VuexPlugins],
})
