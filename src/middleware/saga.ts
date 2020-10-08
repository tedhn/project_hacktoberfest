import { SEARCH_REQUEST } from "./../store/action/action";
import { put, takeLatest } from "redux-saga/effects";
import { callApi } from "./api";

function* getData(action: any) {
  const { name, types } = action;

  try {
    const response = yield callApi(name);

    if (response.response === "success") {
      yield put({ type: types[1], response });
    } else {
      yield put({ type: types[2], response });
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(SEARCH_REQUEST, getData);
}
