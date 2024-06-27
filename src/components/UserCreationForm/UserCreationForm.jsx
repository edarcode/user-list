import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { ROLES } from "../../constants/roles.js";
import { useCreateUserForm } from "../../hooks/useCreateUserForm.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputText from "../forms/InputText/InputText.jsx";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync.jsx";
import Select from "../forms/Select/Select.jsx";
import Cross from "../icons/Cross.jsx";
import css from "./css.module.css";

export default function UserCreationForm({ setFilterForm }) {
	const { name, username, setName, setUsername } = useCreateUserForm();

	return (
		<form className={css.form}>
			<InputText
				className={css.name}
				title="nombre"
				placeholder="edarcode..."
				value={name.value}
				err={name.err}
				onChange={e => setName(e.target.value)}
			/>
			<InputTextAsync
				className={css.username}
				title="username"
				placeholder="@edarcode..."
				value={username.value}
				err={username.err}
				onChange={e => setUsername(e.target.value)}
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
