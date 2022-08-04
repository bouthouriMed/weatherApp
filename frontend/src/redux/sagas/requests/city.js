import axios from "axios";

export function requestGetCities() {
  return axios.request({
    method: "get",
    url: "api/city"
  });
}

export function requestAddCity(cityName) {
  return axios.request({
    method: "post",
    url: "api/city",
    data: {
      cityName
    }
  });
}
