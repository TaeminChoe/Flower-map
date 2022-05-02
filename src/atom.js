import { atom } from "recoil";

let loadingState = atom({
  key: "loading",
  default: true,
});

export default loadingState;
