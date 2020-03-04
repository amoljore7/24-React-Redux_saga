import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
// import { takeEvery, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(1000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
// export function* watchAgeUp() {
//   yield takeEvery("AGE_UP", ageUpAsync);
// }
