import UserList from "../../components/UserList/UserList.jsx";
import UserListForm from "../../components/UserListForm/UserListForm.jsx";
import UserListPageSelector from "../../components/UserListPageSelector/UserListPageSelector.jsx";
import UserListPaginationForm from "../../components/UserListPaginationForm/UserListPaginationForm.jsx";
import { useUsers } from "../../stores/users/userUsers.jsx";
import css from "./App.module.css";

export default function App() {
	const getFirstUsers = useUsers(state => state.updateDisplayAndTotalPages);
	getFirstUsers();
	return (
		<section className={css.app}>
			<h1 className={css.title}>Listado de usuarios</h1>
			<UserListForm />
			<UserList />
			<div className={css.pagination}>
				<UserListPaginationForm />
				<UserListPageSelector className={css.pageSelector} />
			</div>
		</section>
	);
}
