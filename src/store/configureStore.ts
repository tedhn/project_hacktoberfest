import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {searchSaga , heroSaga} from "../middleware/saga";

import { createReducer } from "./reducers";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const { run: runSaga } = sagaMiddleware;
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: middlewares,
  });

  sagaMiddleware.run(searchSaga);
  sagaMiddleware.run(heroSaga);
  return store;
};

export default configureAppStore;
