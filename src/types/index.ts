import { ThunkDispatch } from "redux-thunk";
import { ActionsType, AppStateType } from "../redux/reduxStore";

export const inferLiteralFromString = <T extends string>(arg: T): T => {
	return arg;
};

export type ThunkDispatchType = ThunkDispatch<AppStateType, void, ActionsType>;
