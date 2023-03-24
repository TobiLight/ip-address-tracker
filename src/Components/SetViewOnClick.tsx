import { useMap } from "react-leaflet";

type PropsType = {
	coordinates: [number, number];
};

const SetMapOnClick = ({ coordinates }: PropsType) => {
	const map = useMap();
	map.setView(coordinates, map.getZoom());
	return null;
};

export default SetMapOnClick;
