const actions = {
  initGame({ commit, state }) {
    if (!state.isGamePaused) commit('toggleSimulation');
    if (state.isModalShown) commit('toggleModal');

    commit('updateFallingIntervalGap', true);
    commit('clearAllShapeArrs');

    commit('generateShape');
    commit('generateShape');

    commit('generateShape', true);
  }
};

export default actions;
