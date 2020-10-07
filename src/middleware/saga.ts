import { SEARCH_REQUEST } from "./../store/action/action";
import { put, takeLatest } from "redux-saga/effects";
import { callApi } from "./api";

function* getData(action: any) {
  const { name, types } = action;

  try {
    const response = yield callApi(name);

    yield put({ type: types[1], payload: response });
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(SEARCH_REQUEST, getData);
}
