import HttpService from "../../../service/http";
import { GET_ARTICLE } from "./type";

// actions
export default {
  async [GET_ARTICLE]({ commit }) {
    const [res, err] = await HttpService.GetArticle();
    if (err) {
      commit(`${GET_ARTICLE}_FAILURE`, err);
      return;
    }
    commit(`${GET_ARTICLE}_SUCCESS`, res.data);
  }
};
