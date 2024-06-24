import { SORT_BY } from "../../constants/sortBy.js";
import { useUsers } from "../../stores/users/userUsers.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";
import Select from "../forms/Select/Select.jsx";

import css from "./css.module.css";

export default function FormUserList() {
	const userToSearch = useUsers(users => users.userToSearch);
	const isCheckedActive = useUsers(users => users.isCheckedActive);
	const sortBy = useUsers(users => users.sortBy);
	const updateUserToSearch = useUsers(users => users.updateUserToSearch);
	const updateIsCheckedActive = useUsers(users => users.updateIsCheckedActive);
	const updateSortBy = useUsers(users => users.updateSortBy);

	return (
		<form className={css.form}>
			<InputSearch
				placeholder="Nombre"
				value={userToSearch}
				onChange={e => updateUserToSearch(e.target.value)}
			/>
			<Select value={sortBy} onChange={e => updateSortBy(e.target.value)}>
				<option value={SORT_BY.default}>defecto</option>
				<option value={SORT_BY.name}>nombre</option>
				<option value={SORT_BY.role}>role</option>
				<option value={SORT_BY.state}>estado</option>
			</Select>
			<InputCheckbox
				text="activos"
				checked={isCheckedActive}
				onChange={e => updateIsCheckedActive(e.target.checked)}
			/>
		</form>
	);
}
