import { Module, ActionTree, MutationTree } from "vuex";
import GridMaker, { Grid } from '@/lib/gridMaker';




interface State {
  grid: Grid;
}

interface RootState {}

const newGrid = new GridMaker() ;


const state: State = {
  grid: []
};

interface ChoiceProps {
  rowIndex: number
  columnIndex: number
}

const actions: ActionTree<State, RootState> = {
  simpleGrid({ commit }) {
    newGrid.generate()
    commit("SET_GRID", newGrid.grid);
  },
  updateGrid({ commit }, payload : ChoiceProps) {
    newGrid.recordChoice(payload)
    commit("SET_GRID", newGrid.grid);
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
