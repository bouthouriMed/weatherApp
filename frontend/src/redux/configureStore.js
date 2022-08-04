import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import { watcherSaga } from "./sagas/rootSaga";
  import citySlice from "./ducks/citySlice";
  
  const sagaMiddleware = createSagaMiddleware();
  
  const reducer = combineReducers({
    city: citySlice
  });
  
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
  });
  sagaMiddleware.run(watcherSaga);
  
  export default store;
  