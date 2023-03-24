import Form from "./Form";
import Information from "./Information";
import classes from "./TopMenu.module.scss";

const TopMenu = () => {
	return (
		<div className={classes.menu}>
			<div className={classes.title}>IP Address Tracker</div>
			<Form />
			<div className={classes.spacer}></div>
			<Information />
		</div>
	);
};

export default TopMenu;
