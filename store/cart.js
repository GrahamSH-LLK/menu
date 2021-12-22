export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, hash) {
      console.log(state.list)
    if (state.list.some(e => e.hash === hash)) {
      state.list.splice(state.list.indexOf({ hash }), 1);
    } else {
      state.list.push({
        hash,
      });
    }
  },
  clear(state) {
    state.list = [];
  },
};
