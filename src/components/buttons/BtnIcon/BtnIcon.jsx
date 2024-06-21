import { BTN_KIND } from "../../../constants/btnKind.js";
import { addAllClassName } from "../../../utils/addAllClassName.js";
import Pencil from "../../icons/Pencil.jsx";
import css from "./css.module.css";

export default function BtnIcon({
	className,
	icon,
	fill = false,
	kind = BTN_KIND.black,
	disabled,
	...props
}) {
	const Icon = icon || Pencil;
	const allClassName = setBtnStyles({ className, kind, fill });
	const classNameBtn = addAllClassName(allClassName);
	const isDisabled = kind === BTN_KIND.disabled || disabled;
	return (
		<button {...props} className={classNameBtn} disabled={isDisabled}>
			<Icon />
		</button>
	);
}

const BTN_STYLES = {
	black: css.black,
	red: css.red,
	disabled: css.disabled,
	fill: css.fill,
	fillRed: css.fillRed,
	fillDisabled: css.fillDisabled
};

const setBtnStyles = ({ className, kind, fill }) => {
	const allClassName = [css.btn, className];

	kind && allClassName.push(BTN_STYLES[kind]);
	fill && allClassName.push(BTN_STYLES.fill);

	const isFillRed = kind && fill && kind === "red";
	isFillRed && allClassName.push(BTN_STYLES.fillRed);

	const isFillDisabled = kind && fill && kind === "disabled";
	isFillDisabled && allClassName.push(BTN_STYLES.fillDisabled);

	return allClassName;
};
