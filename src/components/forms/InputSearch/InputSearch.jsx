import Loupe from "../../icons/Loupe.jsx";
import css from "./css.module.css";

export default function InputSearch(props) {
	return (
		<label className={css.label}>
			<input {...props} className={css.input} type="text"></input>
			<Loupe className={css.icon} />
		</label>
	);
}
