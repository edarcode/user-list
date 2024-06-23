import UserList from "../../components/UserList/UserList.jsx";
import UserListForm from "../../components/UserListForm/UserListForm.jsx";
import UserListPageSelector from "../../components/UserListPageSelector/UserListPageSelector.jsx";
import UserListPaginationForm from "../../components/UserListPaginationForm/UserListPaginationForm.jsx";
import { useUsers } from "../../hooks/useUsers.jsx";
import css from "./App.module.css";

export default function App() {
	const { allUsers, formUserList, totalPages, actions } = useUsers();

	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<UserListForm
				userToSearch={formUserList.userToSearch}
				isCheckedActive={formUserList.isCheckedActive}
				sortBy={formUserList.sortBy}
				setUserToSearch={actions.setUserToSearch}
				setIsCheckedActive={actions.setIsCheckedActive}
				setSortBy={actions.setSortBy}
			/>
			<UserList users={allUsers} />
			<div className={css.pagination}>
				<UserListPaginationForm
					usersPerPage={formUserList.usersPerPage}
					setUsersPerPage={actions.setUsersPerPage}
				/>
				<UserListPageSelector
					className={css.pageSelector}
					page={formUserList.page}
					setPage={actions.setPage}
					totalPages={totalPages}
				/>
			</div>
		</section>
	);
}
