import { addAllClassName } from "../../../utils/addAllClassName.js";
import Loupe from "../../icons/Loupe.jsx";
import css from "./css.module.css";

export default function InputSearch({ className, ...props }) {
	const allClassName = [css.label, className];
	const classNameLabel = addAllClassName(allClassName);
	return (
		<label className={classNameLabel}>
			<input {...props} className={css.input} type="text"></input>
			<Loupe className={css.icon} />
		</label>
	);
}
