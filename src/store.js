import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      test_message: "Vuex успешно подключен",
      width: null,
      height: null,
      is_auth: null,
    },

    mutations: {
      setAuth(state, status) {
        state.is_auth = status;
      },

      setWidth(state, width) {
        state.width = width;
      },

      setHeight(state, height) {
        state.height = height;
      }
    }
  }
);
