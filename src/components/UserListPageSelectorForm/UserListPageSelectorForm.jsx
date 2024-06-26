import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { useGetUsers } from "../../hooks/useGetUsers.jsx";
import { useUsers } from "../../stores/users/useUsers.jsx";
import { addAllClassName } from "../../utils/addAllClassName.js";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import Arrow from "../icons/Arrow.jsx";
import css from "./css.module.css";

export default function UserListPageSelectorForm({ className }) {
	const page = useUsers(users => users.page);
	const changePageUsers = useUsers(users => users.changePageUsers);
	const totalPages = useUsers(users => users.totalPages);

	useGetUsers(page);

	const isDisabledBtnLeft = page <= 1;
	const isDisabledBtnRight = page >= totalPages;

	const kindLeft = isDisabledBtnLeft
		? BTN__ICON_KIND.fillDisabled
		: BTN__ICON_KIND.fillBlack;

	const kindRight = isDisabledBtnRight
		? BTN__ICON_KIND.fillDisabled
		: BTN__ICON_KIND.fillBlack;

	const finalClassName = addAllClassName([css.pageSelector, className]);

	return (
		<div className={finalClassName}>
			<BtnIcon
				className={css.btnLeft}
				icon={Arrow}
				kind={kindLeft}
				onClick={() => changePageUsers(page - 1)}
				disabled={isDisabledBtnLeft}
			/>
			<p>
				Página {page} de {totalPages}
			</p>
			<BtnIcon
				icon={Arrow}
				kind={kindRight}
				onClick={() => changePageUsers(page + 1)}
				disabled={isDisabledBtnRight}
			/>
		</div>
	);
}
