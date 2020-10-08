import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../middleware/saga";

import { createReducer } from "./reducers";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const { run: runSaga } = sagaMiddleware;
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: middlewares,
  });

  sagaMiddleware.run(mySaga);
  return store;
};

export default configureAppStore;
