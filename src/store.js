import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  noteContent: ''
};
const getters = {
  addNoteContent: function(state) {
    return state.addNoteContent;
  }
};
const mutations = {
  addNoteContent(state, data) {
    state.noteContent = data;
  }
  // delete(state,data){
  //   state.noteContent=data;
  // },
};
const actions = {
  addNoteContent(context, data) {
    context.commit('addNoteContent', data);
  }
  // deleteAction(context,data){
  //   context.commit('delete',data)
  // },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
