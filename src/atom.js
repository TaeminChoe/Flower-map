import { atom } from "recoil";

const loadingState = atom({
  key: "loading",
  default: true,
});
const regionState = atom({
  key: "region",
  default: null,
});

export { loadingState, regionState };
