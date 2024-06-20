import { SORT_BY } from "../../constants/sortBy.js";
import InputCheckbox from "../forms/InputCheckbox/InputCheckbox.jsx";
import InputSearch from "../forms/InputSearch/InputSearch.jsx";
import Select from "../forms/Select/Select.jsx";

import css from "./css.module.css";

export default function FormUserList({
	userToSearch,
	isCheckedActive,
	sortBy,
	setUserToSearch,
	setIsCheckedActive,
	setSortBy
}) {
	return (
		<form className={css.form}>
			<InputSearch
				placeholder="Nombre"
				value={userToSearch}
				onChange={e => setUserToSearch(e.target.value)}
			/>
			<Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
				<option value={SORT_BY.default}>defecto</option>
				<option value={SORT_BY.name}>nombre</option>
				<option value={SORT_BY.role}>role</option>
				<option value={SORT_BY.state}>estado</option>
			</Select>
			<InputCheckbox
				text="activos"
				checked={isCheckedActive}
				onChange={e => setIsCheckedActive(e.target.checked)}
			/>
		</form>
	);
}
