import { BTN__ICON_KIND } from "../../../constants/btnIconKind.js";
import { addAllClassName } from "../../../utils/addAllClassName.js";
import Pencil from "../../icons/Pencil.jsx";
import css from "./css.module.css";

export default function BtnIcon({
	className,
	icon,
	kind = BTN__ICON_KIND.black,
	...props
}) {
	const Icon = icon || Pencil;
	const btnStyles = setBtnStyles(kind);
	const allClassName = [css.btn, ...btnStyles, className];
	const finalClassNameBtn = addAllClassName(allClassName);

	return (
		<button {...props} className={finalClassNameBtn}>
			<Icon />
		</button>
	);
}

const BTN_STYLES = {
	[BTN__ICON_KIND.black]: css.black,
	[BTN__ICON_KIND.fillBlack]: css.fillBlack,
	[BTN__ICON_KIND.red]: css.red,
	[BTN__ICON_KIND.fillRed]: css.fillRed,
	[BTN__ICON_KIND.disabled]: css.disabled,
	[BTN__ICON_KIND.fillDisabled]: css.fillDisabled
};

const setBtnStyles = kind => {
	const btnStyles = [];
	kind && btnStyles.push(BTN_STYLES[kind]);

	return btnStyles;
};
