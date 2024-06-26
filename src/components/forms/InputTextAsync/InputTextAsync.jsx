import { addAllClassName } from "../../../utils/addAllClassName.js";
import Err from "../../icons/Err.jsx";

import Loading from "../../icons/Loading.jsx";
import Success from "../../icons/Success.jsx";
import css from "./css.module.css";

export default function InputTextAsync({
	className,
	title = "title",
	err,
	loading,
	success,
	...props
}) {
	const finalClassNameLabel = addAllClassName([css.label, className]);
	const finalClassNameInput = addAllClassName([css.input, err && css.errInput]);

	return (
		<label className={finalClassNameLabel}>
			<p className={css.title}>{title}</p>
			<label className={css.labelTwo}>
				<input {...props} className={finalClassNameInput} type="text"></input>

				{loading && <Loading className={css.loading} />}
				{success && <Success className={css.success} />}
				{err && <Err className={css.err} />}
			</label>
			{err && <p className={css.errText}>{err}</p>}
		</label>
	);
}
