import UserList from "../../components/UserList/UserList.jsx";
import UserListForm from "../../components/UserListForm/UserListForm.jsx";
import UserListPageSelectorForm from "../../components/UserListPageSelectorForm/UserListPageSelectorForm.jsx";

import UserListPaginationForm from "../../components/UserListPaginationForm/UserListPaginationForm.jsx";
import { useUsers } from "../../stores/users/useUsers.jsx";
import css from "./App.module.css";

export default function App() {
	useUsers(state => state.getUsersToDisplay)();

	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<UserListForm />
			<UserList />
			<div className={css.pagination}>
				<UserListPaginationForm />
				<UserListPageSelectorForm className={css.pageSelector} />
			</div>
		</section>
	);
}
