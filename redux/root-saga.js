import { all, call } from "redux-saga/effects";
import { userSagas } from "./user-saga/user-saga";

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
