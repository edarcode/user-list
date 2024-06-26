import CurrentUserManagerForm from "../../components/CurrentUserManagerForm/CurrentUserManagerForm.jsx";
import UserList from "../../components/UserList/UserList.jsx";
import UserListPageSelectorForm from "../../components/UserListPageSelectorForm/UserListPageSelectorForm.jsx";
import UserListPaginationForm from "../../components/UserListPaginationForm/UserListPaginationForm.jsx";
import { useGetUsers } from "../../hooks/useGetUsers.jsx";
import css from "./App.module.css";

export default function App() {
	useGetUsers(null, true);

	return (
		<section className={css.app}>
			<h1 className={css.title}>Gestor de usuarios</h1>
			<CurrentUserManagerForm />
			<UserList />
			<div className={css.pagination}>
				<UserListPaginationForm />
				<UserListPageSelectorForm className={css.pageSelector} />
			</div>
		</section>
	);
}
