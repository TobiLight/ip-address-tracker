import { useEffect } from "react";
import classes from "./Information.module.scss";
import { useTypedSelector } from "../redux/reduxStore";
import { useDispatch } from "react-redux";
import { updateIp } from "../redux/middleware/map";
import InformationItem from "./InformationItem";

const Information = () => {
	const info = useTypedSelector((state) => state.map);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateIp(null));
	}, [dispatch]);
	return (
		<div className={classes.info}>
			<InformationItem title="IP ADDRESS" content={info.ip} classes={classes} />
			<InformationItem
				title="LOCATION"
				content={info.location}
				classes={classes}
			/>
			<InformationItem
				title="TIMEZONE"
				content={info.timezone}
				classes={classes}
			/>
			<InformationItem
				title="ISP"
				content={info.isp}
				classes={classes}
				titleClass={classes.noBorder}
				contentClass={classes.noBorder}
			/>
		</div>
	);
};

export default Information;
