import { atom } from "recoil";
import { REGION_LIST } from "./utils/regionData";

const loadingState = atom({
  key: "loading",
  default: true,
});
const regionState = atom({
  key: "region",
  default: REGION_LIST,
});

export { loadingState, regionState };
