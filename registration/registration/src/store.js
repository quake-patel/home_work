import { createStore } from "redux"; //required
import rootReducers from "./reducers";

const store = createStore(rootReducers)

export default store