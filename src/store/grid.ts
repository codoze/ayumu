import { Module, ActionTree, MutationTree } from "vuex";

type ColumnContent = number | undefined;
type Grid = ColumnContent[][];

interface State {
  grid: Grid;
}

interface RootState {}

const state: State = {
  grid: [[]]
};

const actions: ActionTree<State, RootState> = {
  simpleGrid({ commit }) {
    const newGrid: Grid = [[1, 2, 3, 4, 5, 6, 7, 8], [4, 5, 6]];
    commit("SET_GRID", newGrid);
  }
};

const mutations: MutationTree<State> = {
  SET_GRID(state, payload) {
    state.grid = payload;
    return state;
  }
};

export const gridModule: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters: {
    currentGrid(state) {
      return state.grid;
    }
  }
};
