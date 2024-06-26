import { addAllClassName } from "../../../utils/addAllClassName.js";
import css from "./css.module.css";

export default function InputText({
	className,
	title = "title",
	err,
	...props
}) {
	const finalClassNameLabel = addAllClassName([css.label, className]);
	const finalClassNameInput = addAllClassName([css.input, err && css.errInput]);

	return (
		<label className={finalClassNameLabel}>
			<p className={css.title}>{title}</p>
			<input {...props} className={finalClassNameInput} type="text"></input>
			<p className={css.err}>{err && err}</p>
		</label>
	);
}
