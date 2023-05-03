import changeTheNumber from "./upDown";
import enterStr from "./upDown";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeTheNumber: changeTheNumber,
    enterStr: enterStr
})

export default rootReducers;