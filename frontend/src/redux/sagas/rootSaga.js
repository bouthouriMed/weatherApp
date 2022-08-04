import { takeLatest } from "redux-saga/effects";
import { handleGetCities, handleAddCity } from "./handlers/city";
import { getCities, addCity } from "../ducks/citySlice";

export function* watcherSaga() {
  yield takeLatest(getCities.type, handleGetCities);
  yield takeLatest(addCity.type, handleAddCity);
}
