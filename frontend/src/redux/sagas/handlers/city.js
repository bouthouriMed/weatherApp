import { call, put } from "redux-saga/effects";
import { setCities, addCitySuccess } from "../../ducks/citySlice";
import { requestGetCities, requestAddCity } from "../requests/city";
import { toast } from 'react-toastify'

export function* handleGetCities(action) {
  try {
    const response = yield call(requestGetCities);
    console.log({first:response})
    const { data } = response;
    yield put(setCities(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handleAddCity(action) {
  try {
    const response = yield call(() => requestAddCity(action.payload));
    console.log({res:response})
    const { data } = response;
    yield put(addCitySuccess(data));
  } catch (error) {
    console.log(error);
    toast(error.response.data.message)
  }
}
