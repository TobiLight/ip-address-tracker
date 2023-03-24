import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTypedSelector } from "../redux/reduxStore";
import classes from "./Map.module.scss";
import SetMapOnClick from "./SetViewOnClick";
import IconLocation from "../images/icon-location.svg";
import leaflet from "leaflet";

const Map = () => {
	const { latitude, longtitude, location } = useTypedSelector(
		(state) => state.map
	);
	const coordinates: [number, number] = [latitude, longtitude];
	return (
		<div className={classes.root}>
			<MapContainer
				className={classes.map}
				center={coordinates}
				zoom={13}
				zoomControl={false}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					position={coordinates}
					icon={leaflet.icon({
						iconUrl: IconLocation,
						iconRetinaUrl: IconLocation,
						iconSize: [34, 41],
					})}
				>
					<Popup>{location}</Popup>
				</Marker>
				<SetMapOnClick coordinates={coordinates} />
			</MapContainer>
		</div>
	);
};

export default Map;
