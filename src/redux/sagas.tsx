import { put, all } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";

const takeLatest: any = Eff.takeLatest;

function* fetchMovies(action: { payload: any }) {
  const json = yield fetch(
    `https://www.omdbapi.com/?s=${action.payload}&apikey=2d1bd938`
  ).then(response => response.json());
  yield put({ type: "MOVIES_RECEIVED", json: json.Search });
}

function* movieWatcher() {
  yield takeLatest("GET_MOVIES", fetchMovies);
}

export default function* mySagas() {
  yield all([movieWatcher()]);
}
