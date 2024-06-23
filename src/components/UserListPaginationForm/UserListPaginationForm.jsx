import Select from "../forms/Select/Select.jsx";
import css from "./css.module.css";

export default function UserListPaginationForm({
	usersPerPage,
	setUsersPerPage
}) {
	return (
		<form className={css.form}>
			<Select
				value={usersPerPage}
				onChange={e => setUsersPerPage(Number(e.target.value))}
			>
				<option value={2}>2</option>
				<option value={4}>4</option>
				<option value={6}>6</option>
			</Select>
			<p>elementos por pagina</p>
		</form>
	);
}
