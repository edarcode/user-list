import { SORT_BY } from "../../constants/sortBy.js";
import { useUsers } from "../../stores/users/useUsers.jsx";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";
import Select from "../forms/Select/Select.jsx";

import css from "./css.module.css";

export default function FormUserList() {
	const userToSearch = useUsers(users => users.userToSearch);
	const isCheckedActive = useUsers(users => users.isCheckedActive);
	const sortBy = useUsers(users => users.sortBy);

	const searchUserByName = useUsers(users => users.searchUserByName);
	const searchActiveUsers = useUsers(users => users.searchActiveUsers);
	const sortUsersBy = useUsers(users => users.sortUsersBy);

	return (
		<form className={css.form}>
			<InputSearch
				placeholder="Nombre"
				value={userToSearch}
				onChange={e => searchUserByName(e.target.value)}
			/>
			<Select value={sortBy} onChange={e => sortUsersBy(e.target.value)}>
				<option value={SORT_BY.default}>defecto</option>
				<option value={SORT_BY.name}>nombre</option>
				<option value={SORT_BY.role}>role</option>
				<option value={SORT_BY.state}>estado</option>
			</Select>
			<InputCheckbox
				text="activos"
				checked={isCheckedActive}
				onChange={e => searchActiveUsers(e.target.checked)}
			/>
		</form>
	);
}
