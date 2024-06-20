import { addAllClassName } from "../../../utils/addAllClassName.js";
import Pencil from "../../icons/Pencil.jsx";
import css from "./css.module.css";

export default function BtnEdit({
	className,
	icon,
	fill = false,
	disabled = false,
	err = false,
	...props
}) {
	const Icon = icon || Pencil;
	const allClassName = setBtnStyles({ className, fill, disabled, err });
	const classNameBtn = addAllClassName(allClassName);
	return (
		<button {...props} className={classNameBtn} disabled={disabled}>
			<Icon />
		</button>
	);
}

const BTN_STYLES = {
	fill: css.fill,
	disabled: css.disabled,
	err: css.err,
	fillDisabled: css.fillDisabled,
	fillErr: css.fillErr
};

const setBtnStyles = ({ className, fill, disabled, err }) => {
	const allClassName = [css.btn, className];
	fill && allClassName.push(BTN_STYLES.fill);
	disabled && allClassName.push(BTN_STYLES.disabled);
	err && allClassName.push(BTN_STYLES.err);
	fill && err && allClassName.push(BTN_STYLES.fillErr);
	fill && disabled && allClassName.push(BTN_STYLES.fillDisabled);

	return allClassName;
};
