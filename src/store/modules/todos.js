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
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      id
    });
    commit("removeTodo", id);
  }
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  newTodo: (state, todo) => {
    state.todos = [...state.todos, todo];
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter(todo => {
      return todo.id !== id;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
