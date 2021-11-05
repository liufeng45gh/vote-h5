import { MODULEA } from "./varDeclar";
import { postRequest } from "@/apis/moduleA.ts";
const moduleA: any = {
  namespaced: true,
  state: {
    title: "当前在ModuleA...",
  },
  getters: {},
  mutations: {
    [MODULEA.CHANGE_TITLE](state, payload): void {
      state.title = payload;
    },
  },
  actions: {
    async [MODULEA.CHANGE_TITLE]({ commit, state }, options) {
      const res: any = await postRequest(options);
      if (res.Success) {
        commit(MODULEA.CHANGE_TITLE, res);
      } else {
        return Promise.reject(res);
      }
    },
  },
};
export default moduleA;
