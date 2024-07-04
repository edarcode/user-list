import { useCurrentUserForm } from "../../stores/current-user-form/useCurrentUserForm.jsx";
import SearchActiveUsers from "../SearchActiveUsers/SearchActiveUsers.jsx";
import SearchUserByName from "../SearchUserByName/SearchUserByName.jsx";
import SortUsersBy from "../SortUsersBy/SortUsersBy.jsx";
import Btn from "../buttons/Btn/Btn.jsx";
import css from "./css.module.css";

export default function UserListFilterForm() {
	const setFormToCreate = useCurrentUserForm(state => state.setFormToCreate);
	return (
		<form className={css.form} onSubmit={e => e.preventDefault()}>
			<SearchUserByName />
			<SortUsersBy />
			<SearchActiveUsers className={css.checkbox} />
			<Btn type="button" onClick={setFormToCreate}>
				Añadir usuario
			</Btn>
		</form>
	);
}
