import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import Modals from "./module/index";

const logger = createLogger();

export const store = configureStore({
  reducer: Modals,
  middleware: [logger],
});
