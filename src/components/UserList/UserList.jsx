import { useUsers } from "../../stores/users/useUsers.jsx";
import User from "../User/User.jsx";
import css from "./css.module.css";
const UserList = () => {
	const allUsers = useUsers(users => users.allUsers);
	const loading = useUsers(users => users.loading);
	const err = useUsers(users => users.err);

	if (loading) return <p>Cargando usuarios...</p>;
	if (err) return <p className={css.err}>Err al cargar usuarios 😢</p>;
	if (allUsers.length <= 0) return <p>No hay usuarios</p>;

	const usersRendered = allUsers.map(user => <User key={user.id} {...user} />);
	return <section className={css.list}>{usersRendered}</section>;
};

export default UserList;
