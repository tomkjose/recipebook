import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import recipesReducer from "./reducers/recipesReducer";
import userReducer from "./reducers/userReducer";
import savedReducer from "./reducers/savedReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  saved: savedReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
