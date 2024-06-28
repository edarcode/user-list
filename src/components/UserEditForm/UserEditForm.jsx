import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { ROLES } from "../../constants/roles.js";
import { useUserEditForm } from "../../hooks/useUserEditForm.jsx";
import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputText from "../forms/InputText/InputText.jsx";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync.jsx";
import Select from "../forms/Select/Select.jsx";
import Cross from "../icons/Cross.jsx";
import css from "./css.module.css";

export default function UserEditForm({ user }) {
	const setFormToFilter = useCurrentUserForm(state => state.setFormToFilter);

	const {
		name,
		username,
		state,
		role,
		setName,
		setRole,
		setState,
		setUsername,
		isValidForm
	} = useUserEditForm(user);

	return (
		<form className={css.form} key={user.id}>
			<BtnIcon
				className={css.cross}
				type="button"
				icon={Cross}
				kind={BTN__ICON_KIND.fillBlack}
				onClick={setFormToFilter}
			/>
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
				loading={username.loading}
				success={
					!username.loading &&
					!username.err &&
					username.value &&
					username.value !== user.username
				}
				onChange={e => setUsername(e.target.value)}
			/>
			<Select value={role} onChange={e => setRole(e.target.value)}>
				<option value={ROLES.teacher}>{ROLES.teacher}</option>
				<option value={ROLES.student}>{ROLES.student}</option>
				<option value={ROLES.other}>{ROLES.other}</option>
			</Select>
			<InputCheckbox
				name="active"
				text="¿activo?"
				checked={state}
				onChange={e => setState(e.target.checked)}
			/>
			<Btn className={css.btnEdit} onClick={() => {}} disabled={!isValidForm}>
				editar usuario
			</Btn>
		</form>
	);
}
