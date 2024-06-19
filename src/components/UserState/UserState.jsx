import { ACTIVE, INACTIVE } from "../../constants/states.js";
import CheckCircle from "../icons/CheckCircle.jsx";
import CrossCircle from "../icons/CrossCircle.jsx";
import css from "./css.module.css";

export default function UserState({ state }) {
	const classState = state ? css.active : css.inactive;
	const textState = state ? ACTIVE : INACTIVE;
	const Icon = state ? CheckCircle : CrossCircle;

	return (
		<div className={`${css.state} ${classState}`}>
			<Icon />
			<p>{textState}</p>
		</div>
	);
}
