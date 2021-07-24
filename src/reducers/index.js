import { combineReducers } from "redux";
import authReducer from "./auth";
import cointReducer from './cointReducer';


const reducer = combineReducers({
	auth: authReducer,
	coinState: cointReducer
});
export default reducer;
