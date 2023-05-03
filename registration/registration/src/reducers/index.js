import changeTheLogin from "./logData";

import { combineReducers } from "redux"; // required

const rootReducers = combineReducers({
    changeTheLogin: changeTheLogin
})

export default rootReducers;