import { combineReducers } from "redux";
//All the different reducers
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
