import { SORT_BY } from "../../constants/sortBy.js";
import css from "./FormUserList.module.css";

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
			<input
				value={userToSearch}
				onChange={e => setUserToSearch(e.target.value)}
			/>
			<label className={css.active}>
				<input
					type="checkbox"
					checked={isCheckedActive}
					onChange={e => setIsCheckedActive(e.target.checked)}
				/>
				activos
			</label>
			<select
				className={css.order}
				value={sortBy}
				onChange={e => setSortBy(e.target.value)}
			>
				<option value={SORT_BY.default}>defecto</option>
				<option value={SORT_BY.name}>nombre</option>
				<option value={SORT_BY.role}>role</option>
				<option value={SORT_BY.state}>estado</option>
			</select>
		</form>
	);
}
