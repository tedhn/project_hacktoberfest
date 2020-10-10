import { HERO_REQUEST, SEARCH_REQUEST } from "./../store/action/action";
import { put, takeLatest } from "redux-saga/effects";
import { callApi, searchHero } from "./api";

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

function* getHero(action: any) {
  const { name, types } = action;

  try {
    const response = yield searchHero(name);

    if (response.response === "success") {
      yield put({ type: types[1], response });
    } else {
      yield put({ type: types[2], response });
    }
  } catch (e) {
    console.log(e);
  }
}

export function* searchSaga() {
  yield takeLatest(SEARCH_REQUEST, getData);
}

export function* heroSaga() {
  yield takeLatest(HERO_REQUEST, getHero);
}
