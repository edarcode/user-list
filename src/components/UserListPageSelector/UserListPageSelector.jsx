import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { addAllClassName } from "../../utils/addAllClassName.js";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Arrow from "../icons/Arrow.jsx";
import css from "./css.module.css";

export default function UserListPageSelector({
	page,
	setPage,
	totalPages,
	className
}) {
	const isDisabledBtnLeft = page <= 1;
	const isDisabledBtnRight = page >= totalPages;

	const finalClassName = addAllClassName([css.pageSelector, className]);

	return (
		<div className={finalClassName}>
			<BtnIcon
				className={css.btnLeft}
				icon={Arrow}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={() => setPage(page - 1)}
				disabled={isDisabledBtnLeft}
			/>
			<p>
				Página {page} de {totalPages}
			</p>
			<BtnIcon
				icon={Arrow}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={() => setPage(page + 1)}
				disabled={isDisabledBtnRight}
			/>
		</div>
	);
}
