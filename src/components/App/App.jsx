import { USERS } from "../../constants/users.js";
import { useFormUserList } from "../../hooks/useFormUserList.jsx";
import { useUsers } from "../../hooks/useUsers.jsx";
import UserList from "../UserList/UserList.jsx";
import UserListForm from "../UserListForm/UserListForm.jsx";
import UserListPageSelector from "../UserListPageSelector/UserListPageSelector.jsx";
import UserListPaginationForm from "../UserListPaginationForm/UserListPaginationForm.jsx";
import css from "./App.module.css";

export default function App() {
	const {
		userToSearch,
		isCheckedActive,
		sortBy,
		page,
		usersPerPage,
		setUserToSearch,
		setIsCheckedActive,
		setSortBy,
		setPage,
		setUsersPerPage
	} = useFormUserList();

	const { users, totalPages } = useUsers(USERS, {
		isCheckedActive,
		userToSearch,
		sortBy,
		page,
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
			<div className={css.pagination}>
				<UserListPaginationForm
					usersPerPage={usersPerPage}
					setUsersPerPage={setUsersPerPage}
				/>
				<UserListPageSelector
					className={css.pageSelector}
					page={page}
					setPage={setPage}
					totalPages={totalPages}
				/>
			</div>
		</section>
	);
}
