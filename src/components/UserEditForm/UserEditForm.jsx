import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { ROLES } from "../../constants/roles.js";
import { updateUser } from "../../fetch/updateUser.js";
import { useSubmitUser } from "../../hooks/useSubmitUser.jsx";
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
		id,
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
	const { submitUser, setSubmitUser } = useSubmitUser(updateUser);

	const handleSubmit = async e => {
		e.preventDefault();
		if (!isValidForm) return;

		const newUser = {
			name: name.value,
			username: username.value,
			role,
			state
		};

		setSubmitUser({ loading: true, err: "", newUser, userId: id });
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
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
			<Btn
				className={css.btnEdit}
				disabled={!isValidForm || submitUser.loading}
			>
				{submitUser.loading ? "editando..." : "editar usuario"}
			</Btn>
			{submitUser.err && <p className={css.submitErr}>{submitUser.err}</p>}
		</form>
	);
}
