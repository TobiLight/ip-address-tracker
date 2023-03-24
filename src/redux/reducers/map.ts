import { MapActionTypes } from "./../types/map";
import * as constants from "../constants/map";

const defaultState = {
	ip: "192.212.174.101",
	location: "Brooklyn, NY 10001",
	timezone: "UTC -05:00",
	isp: "SpaceX Starlink",
	latitude: 51.11056,
	longtitude: 24.18961,
	error: false,
};

const reducer = (state = defaultState, action: MapActionTypes) => {
	switch (action.type) {
		case constants.UPDATE_IP: {
			const {
				ip,
				location,
				timezone,
				isp,
				latitude,
				longtitude,
			} = action.payload;
			return { ...state, ip, location, timezone, isp, latitude, longtitude };
		}
		case constants.SET_ERROR_VALUE: {
			const { error } = action.payload;
			return {
				...state,
				error,
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
