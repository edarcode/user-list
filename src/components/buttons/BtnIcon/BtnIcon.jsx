import { BTN__ICON_KIND } from "../../../constants/btnIconKind.js";
import { addAllClassName } from "../../../utils/addAllClassName.js";
import Pencil from "../../icons/Pencil.jsx";
import css from "./css.module.css";

export default function BtnIcon({ className, icon, kind, ...props }) {
	const Icon = icon || Pencil;
	const allClassName = [css.btn, className, BTN_STYLES[kind]];
	const finalClassNameBtn = addAllClassName(allClassName);

	return (
		<button {...props} className={finalClassNameBtn}>
			<Icon />
		</button>
	);
}

const BTN_STYLES = {
	[BTN__ICON_KIND.fillBlack]: css.fillBlack,
	[BTN__ICON_KIND.red]: css.red,
	[BTN__ICON_KIND.fillRed]: css.fillRed,
	[BTN__ICON_KIND.fillDisabled]: `${css.fillDisabled} ${css.powerFillDisabled}`
};
