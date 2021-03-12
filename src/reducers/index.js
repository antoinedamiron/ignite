import { combineReducers } from "redux";
//All the different reducers
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
