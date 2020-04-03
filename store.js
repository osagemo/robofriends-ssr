import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { requestRobots, searchRobots } from "./redux/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ requestRobots, searchRobots });

const firstInitialState = {
  searchField: "",
  isPending: false,
  robots: [],
  error: ""
};

export function makeStore(initialState, options) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
