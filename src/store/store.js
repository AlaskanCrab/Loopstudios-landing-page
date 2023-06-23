import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "btnStore",
  state: () => ({
    menuStatus: false,
  }),
  actions: {
    closeMenu() {
      this.menuStatus = false;
    },
    openMenu() {
      this.menuStatus = true;
    },
  },
});
export default useStore;
