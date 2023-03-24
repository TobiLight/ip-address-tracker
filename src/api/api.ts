import axios from "axios";

export const geoInstance = axios.create({
	baseURL: "https://geo.ipify.org/api/",
});
