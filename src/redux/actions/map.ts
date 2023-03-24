import { inferLiteralFromString } from "./../../types/index";
import * as constants from "../constants/map";

export const updateIp = (
	ip: string,
	location: string,
	timezone: string,
	isp: string,
	latitude: number,
	longtitude: number
) => ({
	type: inferLiteralFromString(constants.UPDATE_IP),
	payload: { ip, location, timezone, isp, latitude, longtitude },
});

export const setErrorValue = (error: boolean) => ({
	type: inferLiteralFromString(constants.SET_ERROR_VALUE),
	payload: { error },
});
