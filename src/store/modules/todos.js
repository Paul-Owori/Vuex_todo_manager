// eslint-disable-next-line
import axios from "axios";

const state = {
  todos: [{ id: 1, title: "Todo One" }, { id: 2, title: "Todo Two" }]
};

const getters = {
  allTodos: state => {
    return state.todos;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    //console.log(response.data);
    commit("setTodos", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
