import { ACTIVE, INACTIVE } from "../../constants/states.js";
import css from "./UserState.module.css";

const UserState = ({ state }) => {
	const classNameState = state ? css.active : css.inactive;
	return (
		<p className={`${css.state} ${classNameState}`}>
			{state ? ACTIVE : INACTIVE}
		</p>
	);
};

export default UserState;
