import { USERS } from "../../constants/users.js";
import { useFormUserList } from "../../hooks/useFormUserList.jsx";
import { useUsers } from "../../hooks/useUsers.jsx";
import UserList from "../UserList/UserList.jsx";
import UserListForm from "../UserListForm/UserListForm.jsx";
import UserListPaginationForm from "../UserListPaginationForm/UserListPaginationForm.jsx";
import BtnIcon from "../buttons/BtnIcon/BtnIcon.jsx";
import css from "./App.module.css";

export default function App() {
	const {
		userToSearch,
		isCheckedActive,
		sortBy,

		usersPerPage,
		setUserToSearch,
		setIsCheckedActive,
		setSortBy,
		setPage,
		setUsersPerPage
	} = useFormUserList();

	const { users } = useUsers(USERS, {
		isCheckedActive,
		userToSearch,
		sortBy,
		usersPerPage
	});

	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<UserListForm
				userToSearch={userToSearch}
				isCheckedActive={isCheckedActive}
				sortBy={sortBy}
				setUserToSearch={setUserToSearch}
				setIsCheckedActive={setIsCheckedActive}
				setSortBy={setSortBy}
			/>
			<UserList users={users} />
			<UserListPaginationForm
				usersPerPage={usersPerPage}
				setPage={setPage}
				setUsersPerPage={setUsersPerPage}
			/>
			<BtnIcon></BtnIcon>
		</section>
	);
}
