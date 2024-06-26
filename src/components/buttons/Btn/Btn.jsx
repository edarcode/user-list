import { BTN_KIND } from "../../../constants/btnKind.js";
import { addAllClassName } from "../../../utils/addAllClassName.js";
import css from "./css.module.css";

export default function Btn({ className, kind, ...props }) {
	const finalClassName = addAllClassName([
		css.btn,
		className,
		BTN_STYLES[kind]
	]);

	return <button {...props} className={finalClassName}></button>;
}

const BTN_STYLES = {
	[BTN_KIND.white]: css.white
};
