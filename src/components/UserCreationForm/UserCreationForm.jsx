import { useEffect, useState } from "react";
import { BTN__ICON_KIND } from "../../constants/btnIconKind.js";
import { ROLES } from "../../constants/roles.js";
import { createUser } from "../../fetch/createUser.js";
import { useCreateUserForm } from "../../hooks/useCreateUserForm.jsx";
import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import { useUsers } from "../../stores/users/useUsers.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputText from "../forms/InputText/InputText.jsx";
import InputTextAsync from "../forms/InputTextAsync/InputTextAsync.jsx";
import Select from "../forms/Select/Select.jsx";
import Cross from "../icons/Cross.jsx";
import css from "./css.module.css";

export default function UserCreationForm() {
	const { name, username, setName, setUsername, isValidForm } =
		useCreateUserForm();
	const resetFilters = useUsers(state => state.resetFilters);
	const getUsers = useUsers(state => state.getUsers);
	const setFormToFilter = useCurrentUserForm(state => state.setFormToFilter);

	const [submitUser, setSubmitUser] = useState({
		err: "",
		loading: false,
		newUser: {}
	});

	useEffect(() => {
		if (!submitUser.loading) return;

		const controller = new AbortController();
		createUser({ body: submitUser.newUser, signal: controller.signal })
			.then(() => {
				resetFilters();
				setFormToFilter();
				getUsers();
			})
			.catch(() => {
				setSubmitUser({ loading: false, err: "error al crear usuario 😢" });
			});

		return () => controller.abort();
	}, [submitUser, resetFilters, setFormToFilter, getUsers]);

	const handleSubmit = async e => {
		e.preventDefault();

		const newUser = {
			name: name.value,
			username: username.value,
			role: e.target.role.value,
			state: e.target.active.checked
		};
		setSubmitUser({ loading: true, err: "", newUser });
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
				success={!username.loading && !username.err && username.value}
				onChange={e => setUsername(e.target.value)}
			/>
			<Select name="role">
				<option value={ROLES.teacher}>{ROLES.teacher}</option>
				<option value={ROLES.student}>{ROLES.student}</option>
				<option value={ROLES.other}>{ROLES.other}</option>
			</Select>
			<InputCheckbox name="active" text="¿activo?" />
			<Btn
				className={css.btnCreate}
				disabled={!isValidForm || submitUser.loading}
			>
				{submitUser.loading ? "creando..." : "crear usuario"}
			</Btn>
			{submitUser.err && <p className={css.submitErr}>{submitUser.err}</p>}
		</form>
	);
}
