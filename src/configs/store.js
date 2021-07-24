import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => {
// 	saveState({
// 		auth: store.getState().auth,
// 		menuActive: store.getState().menuActive,
// 	});
// });

export default store;
