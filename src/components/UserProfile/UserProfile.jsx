import { addAllClassName } from "../../utils/addAllClassName.js";
import css from "./css.module.css";

export default function UserProfile({ className, name, username }) {
	const finalClassName = addAllClassName([css.profile, className]);
	return (
		<div className={finalClassName}>
			<p className={css.name}>{name}</p>
			<p className={css.username}>@{username}</p>
		</div>
	);
}
