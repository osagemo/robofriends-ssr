// Not used atm, store creation in _app
import { searchRobots, requestRobots } from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { setSearchField, fetchRobots } from "../redux/actions";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

// const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware) //, logger)
);

export default store;
