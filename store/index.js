export const state = () => ({
  mmms: 110,
});
export const actions = {
  buy({commit, state}, amount) {
    if (state.mmms - amount < 0) return { error: true };
    commit("buy", amount);
    return
  },
};
export const mutations = {
  buy(state, amount) {
    if (state.mmms - amount < 0) return { error: true };
    state.mmms += -amount;
  },
};
