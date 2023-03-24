import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import mapReducer from "./reducers/map";
import { MapActionTypes } from "./types/map";

const rootReducer = combineReducers({
	map: mapReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;
export type ActionsType = MapActionTypes; // union of all current action types

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // required for Redux extension

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
