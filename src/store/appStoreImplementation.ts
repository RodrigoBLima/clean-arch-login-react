import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "../core/user/data/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const appStoreImplementation = createStore(rootReducer, applyMiddleware(thunk));

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };
