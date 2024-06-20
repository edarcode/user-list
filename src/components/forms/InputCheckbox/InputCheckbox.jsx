import { addAllClassName } from "../../../utils/addAllClassName.js";
import Check from "../../icons/Check.jsx";
import css from "./css.module.css";

export default function InputCheckbox({ className, ...props }) {
	const allClassName = [css.label, className];
	const classNameLabel = addAllClassName(allClassName);
	return (
		<label className={classNameLabel}>
			<input {...props} type="checkbox" className={css.checkbox} />
			<span className={css.fakeCheckbox}>
				<Check className={css.icon} />
			</span>
			{props.text}
		</label>
	);
}
