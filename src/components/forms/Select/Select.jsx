import { addAllClassName } from "../../../utils/addAllClassName.js";
import Arrow from "../../icons/Arrow.jsx";
import css from "./css.module.css";

export default function Select({ className, ...props }) {
	const allClassName = [css.wrapper, className];
	const classNameWrapper = addAllClassName(allClassName);

	return (
		<div className={classNameWrapper}>
			<select {...props} className={css.select}></select>
			<Arrow className={css.arrow} />
		</div>
	);
}
