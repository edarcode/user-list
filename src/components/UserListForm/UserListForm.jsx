import SearchActiveUsers from "../SearchActiveUsers/SearchActiveUsers.jsx";
import SearchUserByName from "../SearchUserByName/SearchUserByName.jsx";
import SortUsersBy from "../SortUsersBy/SortUsersBy.jsx";

import css from "./css.module.css";

export default function FormUserList() {
	return (
		<form className={css.form}>
			<SearchUserByName />
			<SortUsersBy />
			<SearchActiveUsers />
		</form>
	);
}
