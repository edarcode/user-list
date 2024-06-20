import { USERS } from "../../constants/users.js";
import { useFormUserList } from "../../hooks/useFormUserList.jsx";
import { useUsers } from "../../hooks/useUsers.jsx";
import { filterUsersByName } from "../../utils/filterUsersByName.js";
import { filterUsersByState } from "../../utils/filterUsersByState.js";
import { sortUsersBy } from "../../utils/sortUsersBy.js";
import FormUserList from "../FormUserList/FormUserList.jsx";
import UserList from "../UserList/UserList.jsx";
import css from "./App.module.css";

export default function App() {
	const {
		userToSearch,
		isCheckedActive,
		sortBy,
		setUserToSearch,
		setIsCheckedActive,
		setSortBy
	} = useFormUserList();
	const { users } = useUsers(USERS);

	let usersFiltered = filterUsersByState(users, isCheckedActive);
	usersFiltered = filterUsersByName(usersFiltered, userToSearch);
	usersFiltered = sortUsersBy(usersFiltered, sortBy);

	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<FormUserList
				userToSearch={userToSearch}
				isCheckedActive={isCheckedActive}
				sortBy={sortBy}
				setUserToSearch={setUserToSearch}
				setIsCheckedActive={setIsCheckedActive}
				setSortBy={setSortBy}
			/>

			<UserList users={usersFiltered} />
		</section>
	);
}
