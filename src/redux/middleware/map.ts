import { ThunkDispatchType } from "../../types";
import { mapApi } from "./../../api/mapApi";
import * as actions from "../actions/map";

export const updateIp = (ipValue?: string | null) => async (
	dispatch: ThunkDispatchType
) => {
	return mapApi.getIpInfo(ipValue).then((response) => {
		const { data } = response;
		dispatch(
			actions.updateIp(
				data.ip,
				data.location.region +
					", " +
					data.location.city +
					" " +
					data.location.postalCode,
				"UTC " + data.location.timezone,
				data.isp,
				data.location.lat,
				data.location.lng
			)
		);
	});
};
