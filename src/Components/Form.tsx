import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";
import { updateIp } from "../redux/middleware/map";
import { validateIP } from "../utils/IPValidator";
import classes from "./Form.module.scss";

type FormReturnType = {
	ip: string;
};

const Form = () => {
	const { handleSubmit, register, reset } = useForm();
	const dispatch = useDispatch();
	const onSubmit = (value: FormReturnType) => {
		if (validateIP(value.ip)) {
			dispatch(updateIp(value.ip));
			reset();
		} else {
			toast.error(`'${value.ip}' is incorrect IP address`);
		}
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				className={classes.ipInput}
				placeholder="Search for any IP address or domain"
				{...register("ip", { required: true })}
			/>
			<button className={classes.submit} type="submit">
				<IconArrow />
			</button>
		</form>
	);
};

export default Form;
