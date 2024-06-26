import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { ROLES } from "../../constants/roles.js";
import Btn from "../buttons/Btn/Btn.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputText from "../forms/InputText/InputText.jsx";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync.jsx";
import Select from "../forms/Select/Select.jsx";
import Cross from "../icons/Cross.jsx";
import css from "./css.module.css";

export default function UserCreationForm({ setFilterForm }) {
	return (
		<form className={css.form}>
			<InputText
				className={css.name}
				title="nombre"
				placeholder="edarcode..."
			/>
			<InputTextAsync
				className={css.username}
				title="username"
				placeholder="@edarcode..."
			/>
			<Select>
				<option value={ROLES.teacher}>{ROLES.teacher}</option>
				<option value={ROLES.student}>{ROLES.student}</option>
				<option value={ROLES.other}>{ROLES.other}</option>
			</Select>
			<InputCheckbox text="¿activo?" />
			<Btn className={css.btnCreate} disabled>
				crear usuario
			</Btn>
			<BtnIcon
				className={css.cross}
				type="button"
				icon={Cross}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={setFilterForm}
			/>
		</form>
	);
}
