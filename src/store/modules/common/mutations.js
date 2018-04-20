import { GET_ARTICLE } from "./type";

// mutations
export default {
  [`${GET_ARTICLE}_SUCCESS`](state, article) {
    state.article = article;
  },
  [`${GET_ARTICLE}_FAILURE`](state, err) {
    throw err;
  }
};
