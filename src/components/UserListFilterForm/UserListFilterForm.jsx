import SearchActiveUsers from "../SearchActiveUsers/SearchActiveUsers.jsx";
import SearchUserByName from "../SearchUserByName/SearchUserByName.jsx";
import SortUsersBy from "../SortUsersBy/SortUsersBy.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import css from "./css.module.css";

export default function UserListFilterForm({ setCreateForm }) {
	return (
		<form className={css.form}>
			<SearchUserByName />
			<SortUsersBy />
			<SearchActiveUsers className={css.checkbox} />
			<Btn type="button" onClick={setCreateForm}>
				Añadir usuario
			</Btn>
		</form>
	);
}
