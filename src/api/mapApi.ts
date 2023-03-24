import { geoInstance } from "./api";
import { AxiosResponse } from "axios";
import { IpResponseType } from "../redux/types/map";

export const mapApi = {
	async getIpInfo(ip?: string | null) {
		if (ip) {
			return geoInstance
				.get(`v1?apiKey=at_rpu1051DnNUZgQbcn0CJoNfWomtGM&ipAddress=${ip}`)
				.then((response: AxiosResponse<IpResponseType>) => response);
		} else {
			return geoInstance
				.get(`v1?apiKey=at_rpu1051DnNUZgQbcn0CJoNfWomtGM`)
				.then((response: AxiosResponse<IpResponseType>) => response);
		}
	},
};
